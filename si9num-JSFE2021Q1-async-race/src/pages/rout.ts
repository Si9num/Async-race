import garage from "./garage";
import header from "./header";
import winners from "./winners";

const createElem: HTMLElement = document.getElementById("app");
function creater(page: string): HTMLElement {
  const elem = document.createElement("div");
  elem.innerHTML = page;
  return elem;
}
createElem.appendChild(creater(header));
interface Iroutes {
  [index: string]: string;
}
const routes: Iroutes = {
  "/garage": garage,
  "/winners": winners,
};
const rootDiv = document.querySelector(".main");
rootDiv.innerHTML = routes["/garage"];

function onNavigate(pathname: string) {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
}
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
document.querySelector(".garage-button").addEventListener("click", () => {
  onNavigate("/garage");
});
document.querySelector(".winners-button").addEventListener("click", () => {
  onNavigate("/winners");
});
