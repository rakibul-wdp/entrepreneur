import { calculatePrice } from "@/utils/calculateprice";
import React from "react";

export const TotalAndCompanyCost = ({
  products,
  courses,
  entrepreneurs,
}: any) => {
  const allProductPrice = calculatePrice(products, (product: any) => {
    return Number(product.productPrice);
  });

  const allCoursePrice = calculatePrice(courses, (course: any) => {
    return Number(course.coursePrice);
  });

  const companyCapital = calculatePrice(entrepreneurs, (entrepreneur: any) => {
    return Number(entrepreneur.entrepreneurCapital);
  });

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">
        Total Cost: {allProductPrice + allCoursePrice}
      </h2>
      <h2 className="text-xl font-semibold">
        Company Cost:{" "}
        {allProductPrice + allCoursePrice === 0
          ? "0"
          : Math.floor(
              ((allProductPrice + allCoursePrice) / companyCapital) * 100
            )}
        %
      </h2>
    </div>
  );
};
