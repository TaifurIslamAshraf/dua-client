import { assests } from "@/lib/assests";
import Image from "next/image";

const SearchCategory = () => {
  return (
    <div className="flex h-[50px] w-full items-center gap-2 border rounded-md pl-3 pr-1 py-1 bg-white my-5">
      <Image src={assests.Search} height={24} width={24} alt="Search" />

      <input
        className="w-full appearance-none bg-transparent border-none outline-none placeholder:text-[#868686] placeholder:text-bas"
        type="text"
        placeholder="Search by Categories"
      />
    </div>
  );
};

export default SearchCategory;
