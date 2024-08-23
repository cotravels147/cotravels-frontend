// ./src/components/ExploreAzores.js

import React from "react";

const ExploreAzores = () => {
  return (
    <div className="bg-blue-100 p-8 mx-28 rounded-lg flex flex-wrap justify-center">
      <div className="px-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className=" font-bold text-6xl py-10">Explore Azores</h1>
          {/* <div className="bg-blue-600 text-white px-4 py-2 rounded-full">
            HOT DEAL
          </div> */}
        </div>
        <div className="text-xl mb-4 pb-10">
          <p>10 nights</p>
          <p>
            from <span className="font-bold text-2xl">$800</span>/person
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Start Exploring
        </button>
      </div>
      <div className="mt-4 flex h-6/6">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfcic7qPkE6RB0WoiQE7Ks4e6TkXa3XethQ&s"
            alt="Forest"
            className="rounded-lg h-3/6 p-4"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfcic7qPkE6RB0WoiQE7Ks4e6TkXa3XethQ&s"
            alt="Snorkeling"
            className="rounded-lg h-3/6 p-4"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/86/ed/58/86ed58c5c09352dc424e7f23c41f48f5.jpg"
            alt="Lighthouse"
            className="rounded-lg h-full p-4 w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreAzores;
