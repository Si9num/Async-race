import { putCars } from "../api/putCars";
import { getURL,path } from "../api/config";

const arrForCountCars: number[] = [];
const arrForCheckGarage: number[] = [];
const createCars = ():void => {
  document.body.addEventListener("click", (ev) => {
   
    const getCars = async () => {
      const response = await fetch(`${getURL}${path.garage}`);
      const data = await response.json();

      if ((<HTMLElement>ev.target).classList.contains("create")) {
        const inputName = (<HTMLInputElement>(
          document.querySelector(".cars-name")
        )).value;
        const inputColor = (<HTMLInputElement>(
          document.querySelector(".cars-color")
        )).value;
        const createElem: HTMLElement = document.querySelector(".garage");
        const elem = document.createElement("div");
        arrForCountCars.push(1);
        arrForCheckGarage.push(1);
        elem.className = `pages pages${data.length}`;
        elem.innerHTML = `
    <div class="cars-container">
      <div class="row-elem-container">
        <div class="car-btn-container">
          <button class="btn select${data.length}">Select</button>
          <button class="btn remove remove${data.length}">Remove</button>
          <span class="cars-name-txt cars-name-txt${data.length}">${inputName}</span>
        </div>
      </div>
      <button class="btn btn-eng start start${data.length}">Start</button>
      <button class="btn btn-eng return${data.length}">Return</button>
      <div class="row">
        <div class="car-img car-img${data.length}">
          <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 226 226"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g class="car-col car-col${data.length}" style= "fill:${inputColor}" ><path d="M31.64,40.68c-4.94375,0 -9.04,4.09625 -9.04,9.04v9.04h-18.08c-0.14125,0 -0.2825,0 -0.42375,0c-2.33062,0.21188 -4.11391,2.17172 -4.09625,4.52v99.44c0,2.48953 2.03047,4.52 4.52,4.52h18.08v9.04c0,4.94375 4.09625,9.04 9.04,9.04h36.16c4.94375,0 9.04,-4.09625 9.04,-9.04v-22.6c0,-4.94375 -4.09625,-9.04 -9.04,-9.04h-9.04v-4.52h-9.04v4.52h-13.56v-9.04h38.27875l12.1475,20.34c0.79453,1.35953 2.24234,2.22469 3.81375,2.26h31.64c0.95344,0.01766 1.90688,-0.2825 2.68375,-0.8475l30.51,-21.7525h16.52625c9.05766,0 18.68031,-1.4125 27.12,-3.1075v30.2275c0,2.48953 2.03047,4.52 4.52,4.52h18.08c2.48953,0 4.52,-2.03047 4.52,-4.52v-40.115c0.01766,-0.19422 0.01766,-0.37078 0,-0.565v-18.08c0,-0.14125 0,-0.2825 0,-0.42375v-40.25625c0,-2.48953 -2.03047,-4.52 -4.52,-4.52h-18.08c-0.14125,0 -0.2825,0 -0.42375,0c-0.14125,0 -0.2825,0 -0.42375,0c-2.15406,0.40609 -3.70781,2.31297 -3.6725,4.52v30.2275c-8.38672,-1.67734 -17.93875,-3.1075 -27.12,-3.1075h-16.52625l-30.51,-21.7525c-0.77687,-0.565 -1.73031,-0.86516 -2.68375,-0.8475h-31.64c-0.14125,0 -0.2825,0 -0.42375,0c-1.43016,0.17656 -2.68375,1.00641 -3.39,2.26l-12.1475,20.34h-38.27875v-9.04h13.56v4.52h9.04v-4.52h9.04c4.94375,0 9.04,-4.09625 9.04,-9.04v-22.6c0,-4.94375 -4.09625,-9.04 -9.04,-9.04zM153.68,45.2c-4.94375,0 -9.04,4.09625 -9.04,9.04v18.08c0,4.94375 4.09625,9.04 9.04,9.04h4.52v4.52h9.04v-4.52h4.52v4.52h9.04v-4.52h4.52c4.94375,0 9.04,-4.09625 9.04,-9.04v-18.08c0,-4.94375 -4.09625,-9.04 -9.04,-9.04zM31.64,49.72h36.16v22.6h-31.64c0,-3.97266 -1.76563,-7.53922 -4.52,-10.02875zM153.68,54.24h31.64v18.08h-31.64zM9.04,67.8h13.56c2.56016,0 4.52,1.95984 4.52,4.52v21.89375c-0.01766,0.22953 -0.01766,0.47672 0,0.70625v36.16c0,0.14125 0,0.2825 0,0.42375v22.17625c0,2.56016 -1.95984,4.52 -4.52,4.52h-13.56zM207.92,67.8h9.04v30.2275c-2.41891,-0.70625 -5.45578,-1.65969 -9.04,-2.5425zM92.80125,76.84h27.685l30.51,21.7525c0.77688,0.565 1.73031,0.86516 2.68375,0.8475h18.08c19.56313,0 40.82125,6.51516 45.2,7.91v11.3c-4.43172,1.37719 -26.07828,7.91 -45.2,7.91h-18.08c-0.95344,-0.01766 -1.90687,0.2825 -2.68375,0.8475l-30.51,21.7525h-27.685l-12.1475,-20.34c-0.79453,-1.35953 -2.24234,-2.22469 -3.81375,-2.26h-40.68v-27.12h40.68c1.57141,-0.03531 3.01922,-0.90047 3.81375,-2.26zM98.5925,94.92c-2.15406,0.40609 -3.70781,2.31297 -3.6725,4.52v27.12c0,2.48953 2.03047,4.52 4.52,4.52h22.6c9.94047,0 18.08,-8.13953 18.08,-18.08c0,-9.94047 -8.13953,-18.08 -18.08,-18.08h-22.6c-0.14125,0 -0.2825,0 -0.42375,0c-0.14125,0 -0.2825,0 -0.42375,0zM103.96,103.96h18.08c5.04969,0 9.04,3.99031 9.04,9.04c0,5.04969 -3.99031,9.04 -9.04,9.04h-18.08zM216.96,127.9725v30.2275h-9.04v-27.685c3.54891,-0.88281 6.62109,-1.83625 9.04,-2.5425zM158.2,140.12v4.52h-4.52c-4.94375,0 -9.04,4.09625 -9.04,9.04v18.08c0,4.94375 4.09625,9.04 9.04,9.04h31.64c4.94375,0 9.04,-4.09625 9.04,-9.04v-18.08c0,-4.94375 -4.09625,-9.04 -9.04,-9.04h-4.52v-4.52h-9.04v4.52h-4.52v-4.52zM36.16,153.68h31.64v22.6h-36.16v-12.57125c2.75437,-2.48953 4.52,-6.05609 4.52,-10.02875zM153.68,153.68h31.64v18.08h-31.64z"></path></g><path d="" fill="none"></path></g></g></svg>
        </div>
      </div>
    </div>
  `;
        (<HTMLInputElement>document.querySelector(".cars-name")).value = "";
        document.querySelector(".garge-length").innerHTML = `Garage(${
          data.length + 1
        })`;
        createElem.appendChild(elem);
        const retCar = async () => {
          const garages = await putCars({
            name: `${inputName}`,
            color: `${inputColor}`,
          });
        };
        retCar();
      }
    };
    getCars();
  });
};
export { createCars, arrForCountCars, arrForCheckGarage };
