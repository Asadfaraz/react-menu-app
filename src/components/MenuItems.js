import React from "react";

const MenuItems = (props) => {
  // destructuring menu items
  const menuItems = props.menu;
  console.log("menuItems: ", menuItems);

  return (
    <article>
      {menuItems.map((item) => {
        const { id, title, img, desc, price } = item;
        // console.log("title: ", title);

        return (
          <article key={id} style={{ display: "flex" }}>
            <div>
              <img src={img} alt={title} style={{ width: "300px" }} />
            </div>

            <div>
              <h3>{title}</h3>
              <h4>{price}</h4>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </article>
  );
};

export default MenuItems;
