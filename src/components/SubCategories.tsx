"use client";
import { useCustomSearchParams } from "@/hooks/useCustomSearchParams";
import { useGetSubCategory } from "@/hooks/useFetch/useCategories";
import { useEffect, useState } from "react";

const SubCategories = () => {
  const { getQueryParam } = useCustomSearchParams();
  const [cat, setCat] = useState<string | null>(null);

  useEffect(() => {
    const catParam = getQueryParam("cat");
    setCat(catParam);
  }, [getQueryParam]);

  const {
    data: subcategory,
    isLoading,
    isSuccess,
    error,
  } = useGetSubCategory(cat);
  console.log(subcategory);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching subcategories</div>;

  return (
    <div>
      {subcategory?.map((subcat: any) => (
        <div key={subcat.id}>{subcat.id}</div>
      ))}
    </div>
  );
};

export default SubCategories;
