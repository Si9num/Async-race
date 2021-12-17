import { getURL, path } from "../api/config";

const returnCars = (): void => {
  document.body.addEventListener("click", (ev) => {
    const getCars = async () => {
      const response = await fetch(`${getURL}${path.garage}`);
      const data = await response.json();

      for (let g = 0; g < 100000; g += 1) {
        if ((<HTMLElement>ev.target).classList.contains(`return${g}`)) {
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
    };
    getCars();
  });
};
export default returnCars;
