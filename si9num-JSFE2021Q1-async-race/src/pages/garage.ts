import { arrForCountCars } from "./actionsWithCars/createCars";
import { counterPage } from "./actionsWithCars/pagination";

const garage = `
<div class="race-img"></div>
<div class="options">
<div class="create">
  <input type="text" class="cars-name" />
  <input type="color" class ="cars-color" />
  <button class="btn create">Create</button>
</div>
<div class="upgrade">
  <input type="text" class="cars-name-update"/>
  <input type="color" class ="cars-color-update" />
  <button class="btn update">Upgrade</button>
</div>
<button class="btn race">Race</button>
<button class="btn res">Reset</button>
<button class="btn generate">Generate cars</button>
</div>
<div class="heading-cont">
<h2 class="garge-length">Garage(${arrForCountCars.length})</h2>
<h3 class="page-heading">Page #${counterPage[0]}</h3>
</div>
<div class="garage-wrap">
<div class="congrats">
<div class="congr-win">
<p class ="congr-text">btbytnyt</p>
</div>
</div>
<section class="garage">
</section>
</div>

<div class="page-btn">
<button class="btn prev">Prev</button>
<button class="btn next">Next</button>
</div>`;
export default garage;
