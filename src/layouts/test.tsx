import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const TestLayout = ({ children }: Props) => {
  return (
    <>
      <div className="w-screen h-screen bg-gray-50">{children}</div>
    </>
  );
};
