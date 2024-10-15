import React from "react";
import { NavLink } from "react-router-dom";

const List = ({ text }) => {
  return (
    <NavLink
      to={`${text.toLowerCase()}`}
      className={({ isActive, isPending }) =>
        isPending
          ? "text-[#6A6A6A] text-base font-Nunito"
          : isActive
          ? "font-black text-blue text-base font-Nunito"
          : ""
      }
    >
      {text}
    </NavLink>
  );
};

export default List;
