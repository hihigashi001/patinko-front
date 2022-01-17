import React from "react";
import { useTestQuery } from "src/states/useTestQuery";

export const InputCommpent = () => {
  const { TestFormHandler } = useTestQuery();
  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    TestFormHandler.onChange(event);
  };
  return (
    <div className="p-2">
      <input
        name="test_message"
        className="p-2 border"
        onChange={change}
        placeholder="ここに入力して下さい。"
      ></input>
    </div>
  );
};
