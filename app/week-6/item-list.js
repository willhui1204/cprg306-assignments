"use client";

import { useState } from "react";
import Item from "./item";


const ItemList = ({items}) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div>
        <label className="text-white">Sort by: </label>
        <button onClick={() => setSortBy("name")} className={`mr-2 px-4 py-2 ${sortBy === "name" ? "bg-orange-500 text-white" : "bg-orange-700 text-white"}`}>Name</button>
        <button onClick={() => setSortBy("category")} className={`mr-2 px-4 py-2 ${sortBy === "category" ? "bg-orange-500 text-white" : "bg-orange-700 text-white"}`}>Category</button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
