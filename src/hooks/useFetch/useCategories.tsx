import {
  getAllCategory,
  getSubCategoryByCategoryId,
} from "@/lib/fetch/category.fetch";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCategory = () => {
  const { isLoading, data, isSuccess, error } = useQuery({
    queryKey: ["Category"],
    queryFn: () => getAllCategory(),
  });
  return { category: data, isLoading, isSuccess, error };
};
export const useGetSubCategory = (categoryId?: string | null) => {
  return useQuery({
    queryKey: ["SubCategory", categoryId],
    queryFn: () => getSubCategoryByCategoryId(categoryId!),
    enabled: !!categoryId,
  });
};
