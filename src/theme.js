export default {
  color: {
    linkBlue: "#94E3F4",
    green1: "#1a7b64",
    green2: "#77B4A9",
    background: "#ffffff",
    black1: "#000000",
    underlineColor: "#9C9C9C",
    gray1: "#9C9C9C",
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
    mobileWidth: `600px`,
  },
};
