function generateCarsName() {
  const arrFirstName = [
    `Audi`,
    `BMW`,
    `Ford`,
    `Honda`,
    `Hyundai`,
    `Kia`,
    `Lada`,
    `Mazda`,
    `Mercedes-Benz`,
    `Mitsubishi`,
    `Nissan`,
    `Renault`,
    `Skoda`,
    `Toyota`,
    `Volkswagen`,
    `Acura`,
    `Daihatsu`,
    `Datsun`,
    `Honda`,
    `Infiniti`,
    `Isuzu`,
    `Lexus`,
    `Mazda`,
    `Mitsubishi`,
    `Lada`,
    `ГАЗ`,
    `Москвич`,
    `ТагАЗ`,
    `УАЗ`,
  ];
  const arrForSecondName = [
    `Ока`,
    `Allante`,
    `EX-Series`,
    `117`,
    `Emgrand`,
    `Aventador`,
    `Diablo`,
    `Gallardo`,
    `Golf`,
    `Polo`,
    `2101`,
    `Granta`,
    `Kalina`,
    `Priora`,
    `Veyron`,
    `Arnage`,
    `Azure`,
    `Continental GT`,
    `Волга`,
    `Газель`,
  ];
  return `${arrFirstName[Math.floor(Math.random() * 29)]} ${
    arrForSecondName[Math.floor(Math.random() * 20)]
  }`;
}
export default generateCarsName();
export const arrForContainCarsNames: string[] = [];
for (let i = 0; i < 1000; i += 1) {
  arrForContainCarsNames.push(generateCarsName());
}
