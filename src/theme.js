export default {
  color: {
    linkBlue: "#94E3F4", //hyperlinks
    green1: "#1a7b64", //primary color
    green2: "#77B4A9",
    background: "#ffffff", //all components backrounds and other white stuff
    black1: "#000000", //all black backrounds etc
    underlineColor: "#9C9C9C", //underlines
    gray1: "#9C9C9C",
    gray2: "#757575",
    gray3: "#C5C5C5",
    gray4: "#f4f4f4", //drawer background
    lightGray: "#EDEDED",
    danger: "#FC282B", //errors
    lightDanger: "#E27875",
    lightDanger2: "#FF9689",
  },
  unit: {
    getRem(px) {
      return `${px / 16}rem`;
    },
    mobileWidth: `600px`,
  },
};
