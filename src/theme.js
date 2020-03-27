export default {
  color: {
    primary: "#0C77F8",
    green1: "#1a7b64",
    background: "#ffffff",
    underlineColor: "rgba(0,0,0,0.35)",
    gray1: "rgba(0,0,0,0.35)"
  },
  unit: {
    getRem(px) {
      return `${px / 16}rem`;
    }
  }
};