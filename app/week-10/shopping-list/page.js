// "use client";

// // import itemsData from "./items.json";
// import React, { useEffect, useState } from "react";
// import { getItems, addItem } from "../_services/shopping-list-service";
// import { redirect } from "next/navigation";
// import NewItem from "./new-item";
// import ItemList from "./item-list";
// import MealIdeas from "./meal-ideas";
// import { useUserAuth } from "../_utils/auth-context";

// const Page = () =>{
//   const [itemList, setItemList] = useState([]);  
//   // const[items, setItems] = useState(itemsData);
//   const[selectedItemName, setSelectedItemName] = useState("");
//   const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();


    
//     const loadItems = async () => {
//       console.log("Loading items...");
//       // console.log(user);
//       // const items = await getItems(user.uid);
//       // setItemList(items);
//       if (user) {
//         const items = await getItems(user.uid);
//         setItemList(items);
//       }
//     }
  
//     useEffect(() => {
//       if (!user) {
//           redirect('/week-10/')
//       } else {
//           loadItems();
//       }
//       }, [user]);

//       async function handleAddItem(newItem) {
//         // setItemList([...itemList, newItem]);
//         try {
//           const id = await addItem(user.uid, newItem);
//           newItem.id = id;
//           setItemList((prevItemList) => [...prevItemList, newItem]);
//         } catch (error) {
//             console.error("Failed to add new item:", error);
//         }
//       }
    
//       function handleSelect(item) {
//         let temp = item.name;
//         temp = temp.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
//         temp = temp.split(',')[0].trim();
//         setSelectedItemName(temp);
//       }
  

//   return (
//     <main className="bg-slate-950">
//       <div className="p-2 m-2">
//             {user ? (
//                 <button className="border p-2 border-yellow-500" onClick={firebaseSignOut}>Sign Out</button>
//             ) : (
//                 <button className="border p-2 border-yellow-500" onClick={gitHubSignIn}>Sign In with GitHub</button>
//             )}
//         </div>

//       <h1 className="text-3xl font-bold m-2 text-white">Shopping List</h1>
//       <div className="flex flex-wrap">
//         <div>
//           <NewItem addItem={handleAddItem} />        
//           <ItemList items={itemList} onItemSelect={handleSelect}/>
//         </div>
//         <MealIdeas ingredient={selectedItemName} />
//       </div>
//     </main>
//   );
// };

// export default Page;

"use client";

// import itemsData from "./items.json";
import React, { useEffect, useState } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";
import { redirect } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

const Page = () => {
  const [itemList, setItemList] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const loadItems = async () => {
    console.log("Loading items...");
    if (user) {
      const items = await getItems(user.uid);
      setItemList(items);
    }
  };

  useEffect(() => {
    if (!user) {
      redirect('/week-10/');
    } else {
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

  function handleSelect(item) {
    let temp = item.name;
    temp = temp.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    temp = temp.split(',')[0].trim();
    setSelectedItemName(temp);
  }

  return (
    <main className="bg-slate-950 min-h-screen">
      <div className="p-2 m-2">
        {user ? (
          <button className="border p-2 border-yellow-500" onClick={firebaseSignOut}>Sign Out</button>
        ) : (
          <button className="border p-2 border-yellow-500" onClick={gitHubSignIn}>Sign In with GitHub</button>
        )}
      </div>

      <h1 className="text-3xl font-bold m-2 text-white">Shopping List</h1>
      <div className="flex flex-wrap">
        <div>
          <NewItem addItem={handleAddItem} />
          <ItemList items={itemList} onItemSelect={handleSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
