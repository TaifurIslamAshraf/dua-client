import { assests } from "@/lib/assests";
import Image from "next/image";

const Search = () => {
  return (
    <div className="flex h-[50px] w-[370px] items-center gap-2 border rounded-md pl-3 pr-1 py-1 bg-white">
      <input
        className="w-full appearance-none bg-transparent border-none outline-none placeholder:text-[#868686] placeholder:text-bas"
        type="text"
        placeholder="Search by Dua Name"
      />
      <div className="bg-[#f3f4f6] max-h-[44px] w-full h-full max-w-[54px] flex flex-col items-center justify-center rounded-md cursor-pointer">
        <Image src={assests.Search} height={24} width={24} alt="Search" />
      </div>
    </div>
  );
};

export default Search;
