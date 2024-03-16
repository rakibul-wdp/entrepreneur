import React from "react";

export const Form = ({ handleSubmit, textTypeName, numberTypeName }: any) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-2 bg-gray-100 text-black p-3"
      >
        <input
          type="text"
          name={textTypeName}
          className="bg-black text-white"
        />
        <input
          type="number"
          name={numberTypeName}
          className="bg-black text-white"
        />
        <input
          type="submit"
          value="Add"
          className="cursor-pointer bg-green-500 px-2"
        />
      </form>
    </div>
  );
};
