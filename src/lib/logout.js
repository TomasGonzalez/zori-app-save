import Cookies from "js-cookie";

async function logout() {
  Cookies.remove("JWT");
  //window.location = "/login";
}

export default logout;
