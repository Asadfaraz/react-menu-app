import React from "react";
import classes from "./menuitems.module.css";

const MenuItems = (props) => {
  // destructuring menu items
  const menuItems = props.menu;
  console.log("menuItems: ", menuItems);

  return (
    <section className={classes.menuItems}>
      {menuItems.map((item) => {
        const { id, title, img, desc, price } = item;
        // console.log("title: ", title);

        return (
          <article key={id} className={classes.singleItem}>
            <div>
              <img src={img} alt={title} />
            </div>

            <div className={classes.itemsDetail}>
              <header className={classes.headerInfo}>
                <h3>{title}</h3>
                <h4>${price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default MenuItems;
