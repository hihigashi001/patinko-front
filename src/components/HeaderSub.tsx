import React from "react";

export const HeaderSub = ({ time }:any) => {
  return <h2 className="flex sticky top-24 h-8 bg-white">{time} 時点のデータ</h2>;
};
