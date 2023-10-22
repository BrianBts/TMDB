import React, { useState } from "react";
import CardCategory from "@/common/CardCategory";
import categories from "@/utils/Categories";

const Category = () => {
  return (
    <div className="flex gap-10 justify-center pb-16 ">
      {categories.map((category) => (
        <CardCategory
          key={category.id}
          title={category.title}
          image={category.imageURL}
          className={"cursor-pointer"}
        />
      ))}
    </div>
  );
};

export default Category;
