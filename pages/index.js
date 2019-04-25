import React from "react";
import dynamic from "next/dynamic";

const DynamicIsOffline = dynamic(() => import("../utils/isOffline"), {
  ssr: false
});

function index() {
  return (
    <div className="container">
      <DynamicIsOffline>
        {({ online }) => (online ? "hello" : "no internet")}
      </DynamicIsOffline>
    </div>
  );
}

export default index;
