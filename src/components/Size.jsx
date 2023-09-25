import React from "react";

const Size = ({ children, title, click }) => {
  return (
    <li
    onClick={click}
      className="font-bold uppercase bg-gray-200 w-9 h-9 flex items-center justify-center cursor-pointer rounded-lg"
      title={title}
    >
      {children}
    </li>
  );
};

export default Size;
