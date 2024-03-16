export const calculatePrice = (calculable: any) => {
  return calculable.reduce((total: any, entrepreneur: any) => {
    return total + Number(entrepreneur.entrepreneurCapital);
  }, 0);
};
