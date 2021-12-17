import { arrForCheckClassName } from "./selectCars";
import { arrForCheckGarage } from "./createCars";
import delCars from "../api/deletCars";
import { getURL, path } from "../api/config";

const deleteCars = (): void => {
  document.body.addEventListener("click", (ev) => {
    const getCars = async () => {
      const response = await fetch(`${getURL}${path.garage}`);
      const data = await response.json();
      for (let i = 0; i <= data.length; i += 1) {
        for (let g = 0; g < 100000; g += 1) {
          if ((<HTMLElement>ev.target).classList.contains(`remove${g}`)) {
            const deleteElem: HTMLElement = document.querySelector(".garage");
            if (document.querySelector(`.pages${g}`)) {
              const elem = document.querySelector(`.pages${g}`);
              deleteElem.removeChild(elem);
              arrForCheckClassName.splice(0, arrForCheckClassName.length);
              arrForCheckGarage.pop();
              document.querySelector(".garge-length").innerHTML = `Garage(${
                data.length - 1
              })`;
              const delCar = async () => {
                const garages = await delCars(g);
              };
              delCar();
            }
          }
        }
      }
    };
    getCars();
  });
};
export default deleteCars;
