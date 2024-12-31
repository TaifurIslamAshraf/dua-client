import { getCategoryDua, getSubCategoryDua } from "@/lib/fetch/dua.fetch";
import { useQuery } from "@tanstack/react-query";

export const useGetcatgoryDua = (categoryId?: string | null) => {
  return useQuery({
    queryKey: ["Dua", categoryId],
    queryFn: () => {
      if (!categoryId) return [];
      return getCategoryDua(categoryId) || [];
    },
    enabled: !!categoryId,
  });
};

export const useGetSubcatDua = (subcategoryId?: string | null) => {
  return useQuery({
    queryKey: ["Dua", subcategoryId],
    queryFn: () => {
      if (!subcategoryId) return [];
      return getSubCategoryDua(subcategoryId) || [];
    },
    enabled: !!subcategoryId,
  });
};
