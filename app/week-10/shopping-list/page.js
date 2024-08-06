"use client";

// import itemsData from "./items.json";
import React, { useEffect, useState } from "react";
import ItemList from "./item-list";
import { useUserAuth } from "../_utils/auth-context";
import { redirect } from "next/navigation";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service.js";
import NewItem from "./new-item";


const Page = () =>{
  const [itemList, setItemList] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const loadItems = async () => {
    console.log("Loading items...");
    console.log(user);
    const items = await getItems(user.uid);
    setItemList(items);
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  async function handleAddItem(newItem) {
    try {
      const id = await addItem(user.uid, newItem);
      newItem.id = id;
      setItemList((prevItemList) => [...prevItemList, newItem]);
    } catch (error) {
        console.error("Failed to add new item:", error);
    }
  }

  const handleItemSelect = (item) => {
    const parts = item.name.split(`,`);
    const cleanedName = parts[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="bg-slate-950">
      <p className="p-4">
                {user ? (<button className="mr-2 px-4 py-2 rounded  bg-blue-600 text-white" onClick={firebaseSignOut}>Sign Out</button>) 
                : (<button className="mr-2 px-4 py-2 rounded  bg-blue-600 hover:bg-blue-500 text-white" onClick={gitHubSignIn}>Sign in with your gitHub</button>
                )}
            </p>
      <h1 className="text-3xl font-bold m-2 text-white">Shopping List</h1>
      <div className="flex flex-wrap">
        <div>
          <NewItem onAddItem={handleAddItem} />        
          <ItemList items={itemList} onItemSelect={handleItemSelect}/>
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
