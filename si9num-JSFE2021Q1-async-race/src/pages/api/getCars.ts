import { getURL, path } from "./config";

const getCars = async () => {
  const response = await fetch(`${getURL}${path.garage}`);
  const data = await response.json();
};
