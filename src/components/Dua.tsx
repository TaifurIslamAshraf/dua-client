"use client";
import { useCustomSearchParams } from "@/hooks/useCustomSearchParams";
import { useGetcatgoryDua } from "@/hooks/useFetch/UesDua";
import { IDua } from "@/types/dua";
import { useEffect, useState } from "react";

const Dua = () => {
  const { getQueryParam } = useCustomSearchParams();
  const [cat, setCat] = useState<string | null>(null);

  useEffect(() => {
    const catParam = getQueryParam("cat");
    setCat(catParam);
  }, [getQueryParam]);

  const { data: dua, isLoading, error } = useGetcatgoryDua(cat);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading duas</p>;

  return (
    <div className="w-full h-[84vh] bg-primary p-4">
      {dua && dua.length > 0 ? (
        dua.map((dua: IDua) => (
          <h1 key={dua.subcat_name_en} className="text-3xl" id={`dua${dua.id}`}>
            {dua.subcat_name_en}
          </h1>
        ))
      ) : (
        <p>No duas found</p>
      )}
    </div>
  );
};

export default Dua;
