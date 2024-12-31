"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useCustomSearchParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const newParams = new URLSearchParams(searchParams);

      if (value) {
        newParams.set(name, value);
      } else {
        newParams.delete(name);
      }

      return newParams.toString();
    },
    [searchParams]
  );

  const setQueryParam = useCallback(
    (name: string, value: string | null) => {
      const queryString = createQueryString(name, value);
      router.push(`?${queryString}`);
    },
    [createQueryString, router]
  );

  const getQueryParam = useCallback(
    (name: string) => {
      return searchParams.get(name);
    },
    [searchParams]
  );

  return {
    getQueryParam,
    setQueryParam,
    createQueryString,
  };
};
