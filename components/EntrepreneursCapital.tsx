import { calculatePrice } from "@/utils/calculateprice";

export const EntrepreneursCapital = ({ entrepreneurs }: any) => {
  // const totalCapital = entrepreneurs.reduce((total: any, entrepreneur: any) => {
  //   return total + Number(entrepreneur.entrepreneurCapital);
  // }, 0);

  // const totalCapital: any = calculatePrice(entrepreneurs);

  const totalCapital = calculatePrice(entrepreneurs, (entrepreneur: any) => {
    return Number(entrepreneur.entrepreneurCapital);
  });

  return (
    <div className="border p-3">
      <h2 className="text-xl font-semibold mb-3">
        Company Capital: {totalCapital} | {totalCapital > 0 ? "100%" : "0%"}
      </h2>
      <h3 className="text-lg font-semibold mb-1 text-center">
        Entrepreneurs Details
      </h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Capital in %</th>
          </tr>
        </thead>
        <tbody>
          {entrepreneurs.map((entrepreneur: any, index: any) => (
            <tr key={index}>
              <td>{entrepreneur.entrepreneurName}</td>
              <td>{entrepreneur.entrepreneurCapital}</td>
              <td>
                {Math.floor(
                  (entrepreneur.entrepreneurCapital / totalCapital) * 100
                )}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
