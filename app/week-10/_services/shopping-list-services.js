import React, { useState, useEffect } from "react";
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";



export default function ItemManager({ userId }) {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);
    const [sortBy, setSortBy] = useState("name");

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const fetchedItems = await getItems(userId);
                setItems(fetchedItems);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };
        fetchItems();
    }, [userId]);

    const handleAddItem = async (e) => {
        e.preventDefault();
        const newItem = { name, category, quantity };

        try {
            const addedItem = await addItem(userId, newItem);
            setItems((prevItems) => [...prevItems, addedItem]);
            setName("");
            setCategory("produce");
            setQuantity(1);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const handleItemSelect = (itemName) => {
        alert(`Selected item: ${itemName}`);
    };

    useEffect(() => {
        const sortedItems = [...items].sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        });
        setItems(sortedItems);
    }, [sortBy, items]);

    return (
        <div>
            <div className="flex mt-10">
                <form onSubmit={handleAddItem} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="name">Item Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter item name"
                            required
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                            className="flex-1 bg-blue-500 hover:bg-red-500"
                        >
                            Increment
                        </button>
                        <p>Quantity: {quantity}</p>
                        <button
                            type="button"
                            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            className="flex-1 bg-blue-500 hover:bg-red-500"
                        >
                            Decrement
                        </button>
                    </div>
                    <div>
                        <label htmlFor="category">Category:</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen goods">Frozen Goods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="personal care">Personal Care</option>
                            <option value="cleaning supplies">Cleaning Supplies</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-red-500">
                        Add Item
                    </button>
                </form>
            </div>
            <div className="flex flex-col gap-4 mt-10">
                <div className="flex justify-between items-center">
                    <h2>Items</h2>
                    <div className="flex-grow relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="flex border border-gray-400 p-2 text-black absolute left-1/2 justify-center bottom-10"
                        >
                            <option value="name">Name</option>
                            <option value="quantity">Quantity</option>
                            <option value="category">Category</option>
                        </select>
                    </div>
                </div>
                <ul>
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleItemSelect(item.name)}
                        >
                            {item.name} - {item.category} ({item.quantity})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export const getItems = async (userId) => {
    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(itemsCollection);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
};

export const addItem = async (userId, item) => {
    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCollection, item);
        return { ...item, id: docRef.id };
    } catch (error) {
        console.error("Error adding item:", error);
        throw error;
    }
};