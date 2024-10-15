'use client';
import { useState } from "react";
import React from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity , setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);


        const item = {
            name: name,
            quantity: quantity,
            category: category
        }

        console.log(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    
    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
        
    };

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity -1);
        }
        
    };

    return (
        <div className="flex items-center justify-center mt-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="justify-center">
                    <label for="name"></label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter item name here:"  required/>
                    </div>
                    
                    <div class="flex flex-row gap-4 ">
                        <button type="button" onClick={increment} disabled={quantity === 20} class="flex-1 bg-blue-500 hover:bg-red-500">Increment</button>
                        <p>Quantity: {quantity}</p>
                        <button type="button" onClick={decrement} disabled={quantity === 1} class="flex-1 bg-blue-500 hover:bg-red-500">Decrement</button>
                        </div>
                        
                        <div className="text-black justify-center">
                            <label for="category"> </label>
                            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="produce">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="bakery">Bakery</option>
                                <option value="meat">Meat</option>
                                <option value="frozen goods">Frozen goods</option>
                                <option value="canned goods">Canned goods</option>
                                <option value="beverages">beverages</option>
                                <option value="snacks">Snacks</option>
                                <option value="personal care">Personal care</option>
                                <option value="cleaning supplies">Cleaning supplies</option>
                                <option value="other">Other</option>
                                </select>
                                </div>
                                
                                <button type="submit" class="bg-blue-500 hover:bg-red-500">Add Item</button>
                                </form>
                                </div>
        );
    }
