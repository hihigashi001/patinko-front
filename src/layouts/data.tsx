import { ReactNode } from "react";
import { HeaderMain } from "src/components/HeaderMain"
import { SharedScrollToTop } from "src/components/SharedScrollToTop"

type Props = {
  children?: ReactNode;
};

export const DataLayout = ({ children }: Props) => {
  return (
    <div className="p-2">
      <HeaderMain />
      <div>{children}</div>
      <SharedScrollToTop />
    </div>
  );
};
