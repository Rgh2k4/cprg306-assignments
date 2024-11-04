'use client';
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleItemSelect = (name) => {
        const cleanName = name
        .replace(/[\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F800}-\u{1F8FF}|\u{1F900}-\u{1F9FF}|\u{1FA00}-\u{1FA6F}|\u{1FA70}-\u{1FAFF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/gu, '', )
        .split(',')[0];

        setSelectedItemName(cleanName);
    };
    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    return (
        <main className="container mx-auto p-4">
            <h1 className="flex font-bold text-xl">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <div className="flex gap-4">
                <ItemList items={items} onItemSelect={handleItemSelect} />
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}
