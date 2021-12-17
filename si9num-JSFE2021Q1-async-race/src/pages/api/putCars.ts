import { getURL, path } from "./config";

export const putCars = async (garages: { name: string; color: string }) => {
  const response = await fetch(`${getURL}${path.garage}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(garages),
  });
  const garage = await response.json();
  return garage;
};
export const retCar = async () => {
  const garages = await putCars({
    name: "test",
    color: "test",
  });
};
