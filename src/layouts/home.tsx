import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const HomeLayout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-full">
      <div>{children}</div>
    </div>
  );
};
