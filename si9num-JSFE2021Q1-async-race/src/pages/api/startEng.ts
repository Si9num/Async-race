const getURL = "http://localhost:3000";
const path = {
  engine: "/engine",
};
const engine = async () => {
  const response = await fetch(`${getURL}${path.engine}?id=2&status=started`);
  const data = await response.json();
  console.log(data);
};

export default engine;
