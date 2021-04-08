import React from "react";

const Categories = (props) => {
  const categories = props.categories;
  const specificCateg = props.specificCateg;
  //   console.log("categories in categ: ", categories);

  return (
    <div>
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
