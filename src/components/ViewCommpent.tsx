import React from "react";
import { useTestQuery } from "src/states/useTestQuery";

export const ViewCommpent = () => {
  const { TestForm } = useTestQuery();

  return (
    <div className="p-2">
      <p className="p-2 text-gray-700">{TestForm.test_message}</p>
    </div>
  );
};
