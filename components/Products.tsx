import React from "react";

export const Products = ({ products }: any) => {
  return (
    <div className="border p-3">
      <h3 className="text-lg font-semibold mb-1 text-center">
        Products Details
      </h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any, index: any) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.productPrice}</td>
              <td>
                <button className="bg-yellow-500 px-2">Sell</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
