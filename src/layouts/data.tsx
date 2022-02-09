import { ReactNode } from "react";
import { HeaderMain } from "src/components/HeaderMain";

type Props = {
  children?: ReactNode;
};

export const DataLayout = ({ children }: Props) => {
  return (
    <div className="p-2">
      <HeaderMain />
      <div>{children}</div>
    </div>
  );
};
