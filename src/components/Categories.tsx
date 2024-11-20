"use client";

import { useCustomSearchParams } from "@/hooks/useCustomSearchParams";
import { useGetAllCategory } from "@/hooks/useFetch/useCategories";
import { assests } from "@/lib/assests";
import { cn } from "@/lib/utils";
import { ICategory } from "@/types/category";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchCategory from "./SearchCategory";
import SubCategories from "./SubCategories";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(1);
  const router = useRouter();
  const { setQueryParam } = useCustomSearchParams();

  //fetch category
  const { isLoading, category, isSuccess, error } = useGetAllCategory();

  const handleSetActiveCategory = (id: number) => {
    setActiveCategory(id);
  };

  useEffect(() => {
    setQueryParam("cat", activeCategory!.toString());
  }, [activeCategory]);

  return (
    <div className="w-[429px] h-[84vh] bg-primary rounded-xl">
      {/* Header */}
      <h1 className="font-[600] text-[17px] rounded-t-xl text-center bg-green h-[57px] text-primary flex flex-col items-center justify-center">
        Categories
      </h1>

      {/* Search Section */}
      <div className="px-3">
        <SearchCategory />
      </div>

      {/* Scrollable Section */}
      <div className="px-3 overflow-y-auto h-[calc(84vh-150px)] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {category ? (
          category.map((item: ICategory) => (
            <div key={item?.id} className="">
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
          <>Loading..</>
        )}
      </div>
    </div>
  );
};

export default Categories;
