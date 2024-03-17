export const calculatePrice = (
  calculable: any,
  getProperty: (item: any) => number
) => {
  return calculable.reduce((total: number, item: any) => {
    return total + getProperty(item);
  }, 0);
};
