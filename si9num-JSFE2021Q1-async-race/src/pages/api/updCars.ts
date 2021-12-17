import { getURL, path } from "./config";

const updCars = async (
  id: number,
  garages: { name: string; color: string }
) => {
  const response = await fetch(`${getURL}${path.garage}/${id + 1}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(garages),
  });
  const garage = await response.json();
  return garage;
};
export default updCars;
