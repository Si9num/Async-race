import { counterPage } from "./pagination";
import { getURL, path } from "../api/config";

const arrForWinner: string[] = [];
const arrForTime: string[] = [];
const race = () => {
  document.body.addEventListener("click", (ev) => {
    const getCars = async () => {
      const response = await fetch(`${getURL}${path.garage}`);
      const data = await response.json();

      let firstItem = 0;
      let lastItem = 7;
      if (counterPage[0] > 1) {
        firstItem = counterPage[0] * 7 - 7;
        lastItem *= counterPage[0];
      }
      for (let g = firstItem; g < lastItem; g += 1) {
        if ((<HTMLElement>ev.target).classList.contains(`race`)) {
          arrForTime.splice(0, arrForTime.length);
          arrForWinner.splice(0, arrForWinner.length);
          if (document.querySelector(`.car-img${g}`)) {
            const engineStart = async () => {
              const responseForStart = await fetch(
                `${getURL}${path.engine}?id=${data[g].id}&status=started`
              );
              const time = await responseForStart.json();

              (<HTMLElement>(
                document.querySelector(`.car-img${g}`)
              )).style.transition = `${time.distance / 500 / time.velocity}s`;
              (<HTMLElement>(
                document.querySelector(`.car-img${g}`)
              )).style.transform = `translateX(${720}%)`;
              try {
                const responseForDrive = await fetch(
                  `${getURL}${path.engine}?id=${data[g].id}&status=drive`
                );
                const resp = await responseForDrive.json();

                if (resp.success === true) {
                  if (arrForTime.length < 2) {
                    arrForWinner.push(data[g].name);
                    arrForTime.push(
                      getComputedStyle(document.querySelector(`.car-img${g}`))
                        .getPropertyValue("transition")
                        .slice(3, 9)
                    );
                  }
                  document.querySelector(
                    ".congr-text"
                  ).innerHTML = `${arrForWinner[0]}(${arrForTime[0]})`;
                  setTimeout(() => {
                    (<HTMLElement>(
                      document.querySelector(".congrats")
                    )).style.visibility = "visible";
                  }, 7000);
                }
              } catch (error) {
                const check = getComputedStyle(
                  document.querySelector(`.car-img${g}`)
                ).getPropertyValue("transform");

                (<HTMLElement>(
                  document.querySelector(`.car-img${g}`)
                )).style.transform = check;
              }
            };
            engineStart();
          }
        }
      }
    };
    getCars();
    if ((<HTMLElement>ev.target).classList.contains(`congrats`)) {
      (<HTMLElement>document.querySelector(".congrats")).style.visibility =
        "hidden";
    }
  });
};
export default race;
