import React, { useState, useEffect } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [list, setList] = useState([...items]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    const sortedList = [...items].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });

  setList(sortedList);
}, [sortBy, items]);

return (
  <div className="flex flex-col gap-4">
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
      {list.map((item) => (
        <Item key={item.id} {...item} onSelect={() => onItemSelect(item.name)}/>
      ))}
    </ul>
  </div>
);

}