import React from "react";
import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="container mx-auto p-4">
            <h1 className="flex font-bold text-xl">Shopping List</h1>
            <ItemList />
        </main>
    );
}