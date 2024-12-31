"use client";

import SkeletonCategory from "@/components/skeleton/SkeletonCategory";
import { useGetAllCategory } from "@/hooks/useFetch/useCategories";
import { assests } from "@/lib/assests";
import { cn } from "@/lib/utils";
import { ICategory } from "@/types/category";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import SubCategories from "./SubCategories";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(1);
  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  // Fetch category
  const { isLoading, category } = useGetAllCategory();

  const filteredCategories =
    category?.filter((item: ICategory) => {
      if (!searchText.trim()) return true;

      const searchRegex = new RegExp(
        searchText
          .split(/\s+/)
          .map((word) => `(?=.*\\b${word}\\w*)`)
          .join(""),
        "i"
      );

      return (
        searchRegex.test(item.cat_name_en) ||
        item.no_of_dua.toString().includes(searchText.toLowerCase()) ||
        item.no_of_subcat.toString().includes(searchText.toLowerCase())
      );
    }) || [];

  const handleSetActiveCategory = (id: number) => {
    setActiveCategory(id);
  };

  //search category
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);

    setActiveCategory(
      filteredCategories.length > 0 ? filteredCategories[0]?.id : null
    );
  };

  useEffect(() => {
    if (activeCategory) {
      router.push(`/?cat=${activeCategory}`);
    }
  }, [activeCategory, router]);

  return (
    <div className="w-[380px] flex-1 h-[84vh] bg-primary rounded-xl">
      {/* Header */}
      <h1 className="font-[600] text-[17px] rounded-t-xl text-center bg-green h-[57px] text-primary flex flex-col items-center justify-center">
        Categories
      </h1>

      {/* Search Section */}
      <div className="px-3">
        <div className="flex h-[50px] w-full items-center gap-2 border rounded-md pl-3 pr-1 py-1 bg-white my-5">
          <Image src={assests.Search} height={24} width={24} alt="Search" />

          <input
            onChange={handleSearch}
            value={searchText}
            className="w-full appearance-none bg-transparent border-none outline-none placeholder:text-[#868686] placeholder:text-bas"
            type="text"
            placeholder="Search by Categories"
          />
        </div>
      </div>

      {/* Scrollable Section */}
      <div className="px-3 overflow-y-auto h-[calc(84vh-150px)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCategory key={index} />
          ))
        ) : filteredCategories.length > 0 ? (
          filteredCategories.map((item: ICategory) => (
            <div key={item?.cat_icon} className="">
              <div
                onClick={() => handleSetActiveCategory(item?.id)}
                className={cn(
                  "w-full h-[80px] flex items-center justify-between p-2 rounded-lg hover:bg-primary-forground cursor-pointer",
                  activeCategory === item?.id && "bg-primary-forground "
                )}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={assests.CategoryIcon}
                    alt={item?.cat_name_en}
                    width={60}
                    height={60}
                  />
                  <div className="">
                    <h2 className="font-semibold text-base text-green">
                      {item?.cat_name_en}
                    </h2>
                    <h3 className="font-normal text-[14px] text-[#7e7e7e] ">
                      Subcategory: {item?.no_of_subcat}
                    </h3>
                  </div>
                </div>
                <div className="border-l border-[#e2e2e2] px-2 text-center">
                  <h1 className="font-semibold text-base text-[#393939]">
                    {item?.no_of_dua}
                  </h1>
                  <h2 className="font-normal text-[#7e7e7e] text-sm">Duas</h2>
                </div>
              </div>
              {activeCategory === item?.id && <SubCategories />}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-10">
            No categories found
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
