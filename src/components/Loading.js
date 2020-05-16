import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import BounceLoader from "react-spinners/BounceLoader";
import theme from "theme";

function Loading() {
  return <BeatLoader size={12} color={"#ffffff"} style={{ color: "white" }} />;
}
export default Loading;

export const ScreenLoader = props => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      {...props}
    >
      <BounceLoader size={60} color={theme.color.green1} />
    </div>
  );
};
