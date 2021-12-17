import { counterPage } from "./pagination";
import { getURL, path } from "../api/config";

const resetRace = (): void => {
  document.body.addEventListener("click", (ev) => {
    const getCars = async () => {
      const response = await fetch(`${getURL}${path.garage}`);
      const data = await response.json();

      let firstCarOnPage = 0;
      let lastCarOnPage = 7;
      if (counterPage[0] > 1) {
        firstCarOnPage = counterPage[0] * 7 - 7;
        lastCarOnPage *= counterPage[0];
      }
      for (let g = firstCarOnPage; g < lastCarOnPage; g += 1) {
        if ((<HTMLElement>ev.target).classList.contains(`res`)) {
          if (document.querySelector(`.car-img${g}`)) {
            const engineStop = async () => {
              const responseForStart = await fetch(
                `${getURL}${path.engine}?id=${data[g].id}&status=stopped`
              );
              const time = await responseForStart.json();

              (<HTMLElement>(
                document.querySelector(`.car-img${g}`)
              )).style.transition = "0s";
              (<HTMLElement>(
                document.querySelector(`.car-img${g}`)
              )).style.transform = `translateX(${0}%)`;
            };
            engineStop();
          }
        }
      }
    };
    getCars();
  });
};
export default resetRace;
