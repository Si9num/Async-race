import { getURL, path } from "../api/config";

const runCars = (): void => {
  document.body.addEventListener("click", (ev) => {
    const getCars = async () => {
      const response = await fetch(`${getURL}${path.garage}`);
      const data = await response.json();

      for (let g = 0; g < 100000; g += 1) {
        if ((<HTMLElement>ev.target).classList.contains(`start${g}`)) {
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
    };
    getCars();
  });
};
export default runCars;
