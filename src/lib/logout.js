import Cookies from "js-cookie";

async function logout() {
  await sessionStorage.removeItem("jwtToken");
  await localStorage.removeItem("jwtToken");

  window.location = "/login";
}

export default logout;
