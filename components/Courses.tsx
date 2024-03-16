import React from "react";

export const Courses = ({ courses }: any) => {
  return (
    <div className="border p-3">
      <h3 className="text-lg font-semibold mb-1 text-center">
        Courses Details
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
          {courses.map((course: any, index: any) => (
            <tr key={index}>
              <td>{course.courseName}</td>
              <td>{course.coursePrice}</td>
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
