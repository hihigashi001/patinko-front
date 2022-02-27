import { ReactNode } from "react";
import { HeaderMain } from "src/components/HeaderMain";
import { BackButton } from "src/components/BackButton";

type Props = {
  children?: ReactNode;
};

export const DataLayout = ({ children }: Props) => {
  return (
    <div className="container w-full min-h-full">
      <HeaderMain />
      <BackButton />
      <div className="">{children}</div>
    </div>
  );
};
