import { ReactNode } from "react";
import Sidebar from "./Sidebar";

const SidebarContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default SidebarContainer;
