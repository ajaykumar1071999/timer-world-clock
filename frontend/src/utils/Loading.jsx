import React from "react";
import { Watch } from "react-loader-spinner";
function Loading() {
  return (
    <Watch
      visible={true}
      height="40"
      width="40"
      radius="18"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Loading;
