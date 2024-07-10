"use client";
import { useState } from "react";

const NewItem = ({onAddItem}) =>{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {name, quantity, category};
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return(
        <form onSubmit={handleSubmit}>
            {/* <div>
                <label>Name</label>
                <input required type="text" onchange={(event) => setName(event.target.value)} value={name}/>
            </div>
            <div>
                <label>Quantity</label>
                <input required type="number" onchange={(event) => setQuantity(event.target.value)} min="1" max="99"/>
            </div>
            <div>
                <label>Category</label>
                <select onchange={(event) => setCategory(event.target.value)} value={category}>
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
            <button>+</button> */}
        </form>

    );
};

export default NewItem;