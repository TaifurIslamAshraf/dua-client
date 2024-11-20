import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="ml-5 mt-5">{children}</div>;
};

export default Container;
