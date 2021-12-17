import { getURL,path } from "./config";


const putWinner = async (garages: {
  id: number;
  wins: number;
  time: number;
}) => {
  const response = await fetch(`${getURL}${path.winner}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(garages),
  });
  const winner = await response.json();
  return winner;
};
export default putWinner;
