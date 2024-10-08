'use client';
import { useState } from "react";
import React from "react";

export default function NewItem() {
    const [quantity , setQuantity] = useState(1);
    const increment = () => {
        setQuantity(quantity + 1, 20);
    };
    const decrement = () => {
        setQuantity(quantity -1, 1);
    };
    

    return (
        <div class="flex, flex row, gap-4 ">
            <button onClick={increment} disabled={quantity === 20} class=".flex-1, bg-blue-500, hover:bg-red-500">Increment</button>
            <p>Quantity: {quantity}</p>
            <button onClick={decrement} disabled={quantity === 1} class=".flex-1, bg-blue-500, hover:bg-red-500">Decrement</button>
        </div>
    );
}