import { getURL, path } from "../api/config";

let coordinateX = 0;
export const counterPage = [1];
let counter = 1;
export const nextBtn = (): void => {
  document.body.addEventListener("click", (ev) => {
    const getCars = async () => {
      const response = await fetch(`${getURL}${path.garage}`);
      const data = await response.json();
      if ((<HTMLElement>ev.target).classList.contains(`next`)) {
        (<HTMLElement>(
          document.querySelector(".garage")
        )).style.transform = `translateX(${coordinateX - 300}%)`;
        coordinateX -= 300;
        counterPage.pop();
        counter += 1;
        counterPage.push(counter);

        if (coordinateX < (-data.length * 300) / 7) {
          (<HTMLElement>(
            document.querySelector(".garage")
          )).style.transform = `translateX(${0}%)`;
          coordinateX = 0;
          counter = 0;
        }
        document.querySelector(
          ".page-heading"
        ).innerHTML = `Page #${counterPage[0]}`;
      }
    };
    getCars();
  });
};
export const prevBtn = (): void => {
  document.body.addEventListener("click", (ev) => {
    const getCars = async () => {
      const response = await fetch(`${getURL}${path.garage}`);
      const data = await response.json();
      if ((<HTMLElement>ev.target).classList.contains(`prev`)) {
        (<HTMLElement>(
          document.querySelector(".garage")
        )).style.transform = `translateX(${coordinateX + 300}%)`;
        coordinateX += 300;
        counterPage.pop();
        counter -= 1;
        counterPage.push(counter);

        if (coordinateX > 0) {
          (<HTMLElement>(
            document.querySelector(".garage")
          )).style.transform = `translateX(${0}%)`;
          coordinateX = 0;
          counter = 0;
        }
        document.querySelector(
          ".page-heading"
        ).innerHTML = `Page #${counterPage[0]}`;
      }
    };
    getCars();
  });
};
