import { ReactNode } from "react";
import { HeaderMain } from "src/components/HeaderMain";

type Props = {
  children?: ReactNode;
};

export const DataLayout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-full">
      <HeaderMain />
      <div className="">{children}</div>
    </div>
  );
};
