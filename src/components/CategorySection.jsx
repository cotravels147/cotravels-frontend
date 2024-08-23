import React from "react";
import Category from "./Category";

const CategorySection = () => {
  return (
    <div>
      <div>
      <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600">
            We have the best equipment
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Category
        </h1>
    </div>
      </div>
    <div className="flex flex-wrap px-44 justify-center ">
      <Category />
    </div>
    </div>
  );
};

export default CategorySection;
