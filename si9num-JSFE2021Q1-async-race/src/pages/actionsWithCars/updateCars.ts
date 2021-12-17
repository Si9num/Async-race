import { arrForCheckClassName } from "./selectCars";

import updCars from "../api/updCars";
import { getURL, path } from "../api/config";

const updateCars = (): void => {
  document.body.addEventListener("click", (ev) => {
    const getCars = async () => {
      const response = await fetch(`${getURL}${path.garage}`);
      const data = await response.json();

      for (let i = 0; i < data.length; i += 1) {
        if ((<HTMLElement>ev.target).classList.contains(`update`)) {
          if (
            (<HTMLInputElement>document.querySelectorAll(`.cars-name-txt`)[i])
              .className === arrForCheckClassName[0]
          ) {
            (<HTMLInputElement>(
              document.querySelectorAll(`.cars-name-txt`)[i]
            )).textContent = (<HTMLInputElement>(
              document.querySelector(`.cars-name-update`)
            )).value;
            let inputName = (<HTMLInputElement>(
              document.querySelectorAll(`.cars-name-txt`)[i]
            )).textContent;
            const inputName1 = (<HTMLInputElement>(
              document.querySelector(`.cars-name-update`)
            )).value;
            inputName = inputName1;
            (<HTMLInputElement>(
              document.querySelectorAll(`.car-col`)[i]
            )).style.fill = (<HTMLInputElement>(
              document.querySelector(".cars-color-update")
            )).value;
            let inputColor = (<HTMLInputElement>(
              document.querySelectorAll(`.car-col`)[i]
            )).style.fill;
            const inputColor1 = (<HTMLInputElement>(
              document.querySelector(".cars-color-update")
            )).value;
            inputColor = inputColor1;
            arrForCheckClassName.splice(0, arrForCheckClassName.length);
            (<HTMLInputElement>(
              document.querySelector(".cars-name-update")
            )).value = "";
            const updCar = async () => {
              const garages = await updCars(i, {
                name: `${inputName}`,
                color: `${inputColor}`,
              });
            };
            updCar();
          }
        }
      }
    };
    getCars();
  });
};
export default updateCars;
