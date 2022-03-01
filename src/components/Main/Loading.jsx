import React from "react";
import { Rings } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Rings color="rgba(0,0,0,0.75)" height={80} width={80} />
    </div>
  );
};

export default Loading;
