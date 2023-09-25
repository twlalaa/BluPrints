import React from "react";

const Color = ({ color, title, selected, click }) => {
  return (
    <li
      onClick={click}
      className={`h-8 w-8 ${color} border flex items-center justify-center rounded-full cursor-pointer`}
      title={title}
    >
      {selected && <span className="h-3 w-3 rounded-full bg-gray-200"></span>}
    </li>
  );
};

export default Color;
