export default {
  color: {
    primary: "#0C77F8",
    background: "#ffffff"
  },
  unit: {
    getRem(px) {
      return `${px / 16}rem`;
    }
  }
};
