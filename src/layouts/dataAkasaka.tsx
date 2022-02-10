import { ReactNode } from "react";
import { HeaderMainAkasaka } from "src/components/HeaderMainAkasaka";

type Props = {
  children?: ReactNode;
};

export const DataLayoutAkasaka = ({ children }: Props) => {
  return (
    <div className="w-full min-h-full">
      <HeaderMainAkasaka />
      <div className="">{children}</div>
    </div>
  );
};
