"use client";

import { useState } from "react";

const generateId = (length = 18) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

const NewItem = ({onAddItem}) =>{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {id: generateId(), name, quantity, category};
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return(
        <form onSubmit={handleSubmit} className="p-4 bg-slate-900 text-black rounded mb-6">
            <div>
                <label className="block mb-0">Name</label>
                <input className="w-96 h-10 p-2 rounded text-black" required type="text" onChange={(event) => setName(event.target.value)} value={name} placeholder="Item name"/>                
            </div>
            <div>
                <label className="block mb-0">Quantity</label>
                <input className="w-96 h-10 p-2 rounded" required type="number" onChange={(event) => setQuantity(event.target.value)} min="1" max="99"/>
            </div>
            <div className="mb-6">
                <label className="block mb-0">Category</label>
                <select className="w-96 h-10 p-2 rounded" onChange={(event) => setCategory(event.target.value)} value={category}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <button className="w-96 h-10 flex justify-center items-center rounded-md bg-blue-600 hover:bg-blue-500 text-white">+</button>
            </div>
        </form>

    );
};

export default NewItem;