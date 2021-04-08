import React from "react";
import classes from "./categories.module.css";

const Categories = (props) => {
  const categories = props.categories;
  const specificCateg = props.specificCateg;
  //   console.log("categories in categ: ", categories);

  return (
    <div className={classes.btnsDiv}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => specificCateg(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
