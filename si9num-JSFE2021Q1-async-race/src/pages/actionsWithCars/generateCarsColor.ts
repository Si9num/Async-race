function generateCarsColor() {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
}
export default generateCarsColor();

export const arrForContainCarsColors: string[] = [];
for (let i = 0; i < 1000; i += 1) {
  arrForContainCarsColors.push(generateCarsColor());
}
