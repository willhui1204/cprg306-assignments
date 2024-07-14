"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import React, { useState } from "react";
import MealIdeas from "./meal-ideas";

const Page = () =>{
    const[items, setItems] = useState(itemsData);
    const[selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (item) =>{
        setItems([...items, item]);
    };

    const handleItemSelect = (item) => {
      const parts = item.name.split(`,`);
      const cleanedName = parts[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
      setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl font-bold m-2 text-white">Shopping List</h1>
      <div className="flex flex-wrap">
        <div>
          <NewItem onAddItem={handleAddItem} />        
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
