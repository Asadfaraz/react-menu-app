import "./App.css";
import React from "react";
import { useState } from "react";
import items from "./components/data";
import Categories from "./components/Categories";
import MenuItems from "./components/MenuItems";

function App() {
  // State hook for managing item
  const [menuItem, setMenuItem] = useState(items);

  // when we need only specific category
  const specificCategory = (categ) => {
    console.log("category ye i he: ", categ);
    if (categ == "All") {
      setMenuItem(items);
      return;
    }

    console.log("yaha ponch gaya");
    const newItems = items.filter((item) => {
      return item.category == categ;
    });
    console.log("newItems: ", newItems);
    setMenuItem(newItems);
  };
  // Getting all the unique categories in items
  const itemCategories = [
    "All",
    ...new Set(
      items.map((item) => {
        return item.category;
      })
    ),
  ];

  // console.log("categ: ", itemCategories);

  return (
    <div className="App">
      <header>
        <h1>Our Menu</h1>
        <hr />
      </header>

      {/* Categories component */}
      <Categories
        categories={itemCategories}
        specificCateg={specificCategory}
      />
      {/* MenuItems component */}
      <MenuItems menu={menuItem} />
    </div>
  );
}

export default App;
