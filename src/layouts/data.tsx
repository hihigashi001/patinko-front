import { ReactNode } from "react";
import { HeaderMain } from "src/components/HeaderMain";
import { BackButton } from "src/components/BackButton";

type Props = {
  storeName: string;
  children?: ReactNode;
};

export const DataLayout = ({ storeName, children }: Props) => {
  return (
    <div className="min-h-full">
      <HeaderMain storeName={storeName}/>
      <BackButton />
      <div className="">{children}</div>
    </div>
  );
};
