export default {
  color: {
    primary: "#0C77F8",
    linkBlue: "#94E3F4",
    green1: "#1a7b64",
    green2: "#77B4A9",
    background: "#ffffff",
    black1: "#000000",
    underlineColor: "rgba(0,0,0,0.35)",
    gray1: "rgba(0,0,0,0.35)",
    gray2: "#757575",
    gray3: "#C5C5C5",
    lightGray: "#EDEDED",
    danger: "#FC282B",
    lightDanger: "#E27875",
  },
  unit: {
    getRem(px) {
      return `${px / 16}rem`;
    },
    mobileWidth: `800px`,
  },
};
