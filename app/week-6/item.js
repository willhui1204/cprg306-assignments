"use client"
import React from "react";

const Item = ({ name, quantity, category }) => {
    return (
      <div className="p-2 m-4 bg-slate-900 text-white max-w-sm">
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-white text-sm">
          Buy {quantity} in {category}
        </p>
      </div>
    );
  };
  export default Item;