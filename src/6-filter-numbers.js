export const filterNumbers = (array, largerThan) => {
  const resultArray = array.filter(number => number <= largerThan)
  return resultArray;
}
