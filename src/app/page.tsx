import Categories from "@/components/Categories";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-[600]">Dua Page</h1>
        <Search />
      </div>
      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}
