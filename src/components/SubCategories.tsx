"use client";

import { useCustomSearchParams } from "@/hooks/useCustomSearchParams";
import { useGetSubCategory } from "@/hooks/useFetch/useCategories";
import { cn } from "@/lib/utils";
import { ISubCategory } from "@/types/category";
import { useEffect, useState } from "react";
import SubcatDua from "./SubcatDua";

const SubCategories = () => {
  const { getQueryParam, setQueryParam } = useCustomSearchParams();
  const [cat, setCat] = useState<string | null>(null);
  const [selectedSubcat, setSelectedSubcat] = useState<number | null>(null);

  useEffect(() => {
    const catParam = getQueryParam("cat");
    if (catParam) {
      setCat(catParam);
    }
  }, [getQueryParam]);

  useEffect(() => {
    if (selectedSubcat) {
      setQueryParam("subcat", selectedSubcat.toString());
    }
  }, [selectedSubcat]);

  const { data: subcategory, isLoading, error } = useGetSubCategory(cat);

  const handleSubcatClick = (subCatId: number) => {
    setSelectedSubcat((prev) => (prev === subCatId ? null : subCatId));
  };

  return (
    <div className="relative">
      <div className="absolute left-[17px] top-0 z-0 w-[2px] h-full bg-transparent border-l-2 border-dotted border-green"></div>

      {isLoading ? (
        <ul className="ml-6 relative z-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <li
              key={index}
              className="relative my-4 pl-2 font-medium text-base cursor-default animate-pulse"
            >
              <span className="absolute z-10 -left-2 top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-gray-300"></span>
              <div className="h-4 bg-gray-300 rounded-md w-40"></div>
            </li>
          ))}
        </ul>
      ) : error ? (
        <div className="text-red-500 text-center">
          Error fetching subcategories
        </div>
      ) : (
        <ul className="ml-6 relative z-10">
          {/* Subcategory List */}
          {subcategory?.map((subcat: ISubCategory) => (
            <div key={subcat.id}>
              <li
                onClick={() => handleSubcatClick(subcat.id)}
                className={cn(
                  "relative my-4 pl-2 font-medium text-[15px] cursor-pointer",
                  selectedSubcat === subcat.id ? "text-green" : "text-[#373737]"
                )}
              >
                <span
                  className={cn(
                    "absolute z-10 -left-2 top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full",
                    selectedSubcat === subcat.id ? "bg-green" : "bg-gray-400"
                  )}
                ></span>
                {subcat.subcat_name_en}
              </li>
              {selectedSubcat === subcat.id && <SubcatDua />}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubCategories;
