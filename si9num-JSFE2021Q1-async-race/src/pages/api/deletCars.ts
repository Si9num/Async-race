import { getURL, path } from "./config";

const delCars = async (id: number) => {
  const response = await fetch(`${getURL}${path.garage}/${id + 1}`, {
    method: "DELETE",
  });
  const garage = await response.json();
  return garage;
};
export default delCars;
