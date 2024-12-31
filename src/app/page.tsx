import Categories from "@/components/Categories";
import Dua from "@/components/Dua";
import Search from "@/components/Search";
import Setting from "@/components/Setting";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dua Page</h1>
        <Search />
      </div>
      <div
        className={cn(
          "mt-8 grid gap-4",
          "grid-cols-[390px_1fr] 3xl:grid-cols-[390px_1fr_330px]"
        )}
      >
        {/* Fixed width Categories */}
        <Categories />

        {/* Dua component dynamically adjusts width */}
        <Dua />

        {/* Setting is hidden on smaller screens */}
        <div className="hidden 3xl:block">
          <Setting />
        </div>
      </div>
    </div>
  );
}
