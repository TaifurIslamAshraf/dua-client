"use client";

import { useCustomSearchParams } from "@/hooks/useCustomSearchParams";
import { useGetSubcatDua } from "@/hooks/useFetch/UesDua";
import { assests } from "@/lib/assests";
import { cn } from "@/lib/utils";
import { IDua } from "@/types/dua";
import Image from "next/image";
import { useEffect, useState } from "react";

const SubcatDua = () => {
  const [subcat, setSubcat] = useState<string | null>(null);
  const [subDua, setSubDua] = useState<number | null>(null);
  const { getQueryParam, setQueryParam } = useCustomSearchParams();
  const { data: subcategoryDua } = useGetSubcatDua(subcat);

  const handleSubcat = (id: number) => {
    setSubDua(id);
  };

  console.log(subcategoryDua);

  useEffect(() => {
    if (subDua) {
      setQueryParam("dua", subDua.toString());
    }
  }, [subDua, setQueryParam]);

  useEffect(() => {
    const subcatParam = getQueryParam("subcat");
    if (subcatParam) {
      setSubcat(subcatParam);
    }
  }, [getQueryParam]);

  return (
    <div>
      {subcategoryDua ? (
        subcategoryDua?.map((dua: IDua) => (
          <div
            className="flex items-center gap-1 my-6 ml-4"
            key={dua.refference_en}
          >
            <Image
              src={assests.DuaArrow}
              alt={dua.dua_name_en}
              width={17}
              height={17}
            />
            <p
              onClick={() => handleSubcat(dua.dua_id)}
              className={cn(
                "text-sm cursor-pointer",
                subDua === dua.dua_id ? "text-green" : "text-[#373737]"
              )}
            >
              {dua.dua_name_en}
            </p>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default SubcatDua;
