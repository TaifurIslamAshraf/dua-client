import { assests } from "@/lib/assests";
import Image from "next/image";
import Link from "next/link";
import SidebarLink from "./SidebarLink";

const sidebarLinks = [
  {
    icon: assests.HomeIcon,
    href: "/",
  },
  {
    icon: assests.AllDua,
    href: "/all-dua",
  },
  {
    icon: assests.Memorize,
    href: "/memorize",
  },
  {
    icon: assests.Bookmark,
    href: "/bookmark",
  },
  {
    icon: assests.HomeIcon,
    href: "/",
  },
  {
    icon: assests.Ruqyah,
    href: "/ruqyah",
  },
  {
    icon: assests.Book,
    href: "/books",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-primary rounded-3xl flex flex-col items-center justify-between h-[95vh] w-[100px] ml-4 mr-7 py-5">
      <Link href={"/"}>
        <Image src={assests.Logo} alt="Logo" height={73} width={73} />
      </Link>
      <SidebarLink data={sidebarLinks} />
      <Link href={"/support"}>
        <Image src={assests.Support} alt="Support" height={73} width={73} />
      </Link>
    </div>
  );
};

export default Sidebar;
