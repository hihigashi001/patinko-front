import React from "react";
import { SharedIcon } from "src/components/SharedIcon";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

export const BackButton = () => {
  return (
    <div
      onClick={() => Router.back()}
      className="fixed bottom-10 right-6 z-50 focus:outline-none"
    >
      <SharedIcon icon={faRotateLeft} />
    </div>
  );
};
