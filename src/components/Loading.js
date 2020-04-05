import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Loading() {
  return <BeatLoader size={150} color={"#123abc"} style={{ color: "white" }} />;
}
export default Loading;
