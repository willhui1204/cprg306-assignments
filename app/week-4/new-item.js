"use client";
import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {name, quantity, category};
        console.log(item);

        alert(`Name: ${name}
        \nQuantity: ${quantity} 
        \nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return(
        <form onSubmit={handleSubmit}className="p-4 bg-slate-900 text-black rounded mb-6">
            <div>
                <label className="block mb-0">Name</label>
                <input className="w-96 h-10 p-2 rounded text-black" required type="text" onChange={(event) => setName(event.target.value)} value={name}/>
            </div>
            <div>
                <label className="block mb-0">Quantity</label>
                <input className="w-96 h-10 p-2 rounded" required type="number" onChange={(event) => setQuantity(event.target.value)} min="1" max="99" value={quantity}/>
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
            <button className="w-96 h-10 flex justify-center items-center rounded-md bg-blue-600 hover:bg-blue-500 text-white">+</button>
        </form>

    );
}