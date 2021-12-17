const arrForCheckClassName: string[] = [];
const selectCars = (): void => {
  document.body.addEventListener("click", (ev) => {
    for (let i = 0; i < 100000; i += 1) {
      if ((<HTMLElement>ev.target).classList.contains(`select${i}`)) {
        (<HTMLInputElement>document.querySelector(`.cars-name-update`)).value =
          (<HTMLInputElement>(
            document.querySelector(`.cars-name-txt${i}`)
          )).textContent;
        arrForCheckClassName.push(
          (<HTMLInputElement>document.querySelector(`.cars-name-txt${i}`))
            .className
        );
      }
    }
  });
};
export { selectCars, arrForCheckClassName };
