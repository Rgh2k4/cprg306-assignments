import React from "react";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [list, setList] = useState(items);
  const [sortBy, setSortBy] = useState("name");

  const sortedList = [...list].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });
}