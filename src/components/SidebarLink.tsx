import { ISidebarLink } from "@/types/sidebar";
import Image from "next/image";
import Link from "next/link";

const SidebarLink = ({ data }: { data: ISidebarLink[] }) => {
  return (
    <div className="space-y-5">
      {data.map((item, i) => (
        <Link
          className="w-[38px] h-[38px] bg-secondary flex flex-col items-center justify-center rounded-full"
          href={item.href}
          key={i}
        >
          <Image src={item.icon} height={20} width={20} alt={item.href} />
        </Link>
      ))}
    </div>
  );
};

export default SidebarLink;
