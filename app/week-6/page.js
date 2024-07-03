"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import React, { useState } from "react";

const Page = () =>{
    const[items, setItems] = useState(itemsData);

    const handleAddItem = (item) =>{
        setItems([...items, item]);
    };

  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl font-bold m-2 text-white">Shopping List</h1>
      <ItemList items={items}/>
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
};

export default Page;
