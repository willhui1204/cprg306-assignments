"use client";
import React from "react";


const Item = ({ name, quantity, category, onSelect }) => {
    return (
      <div className="p-2 m-4 bg-slate-900 text-white max-w-sm cursor-pointer" onClick={() => onSelect({name, quantity, category})}>
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-white text-sm">
          Buy {quantity} in {category}
        </p>
      </div>
    );
  };
  export default Item;