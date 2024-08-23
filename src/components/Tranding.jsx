import React from "react";
import { AiOutlineFire, AiOutlineClockCircle } from "react-icons/ai";

const places = [
  {
    id: 1,
    name: "Beautiful Beach",
    image: "https://via.placeholder.com/150",
    views: 1200,
    added: "2 hours ago",
  },
  {
    id: 2,
    name: "Mountain Retreat",
    image: "https://via.placeholder.com/150",
    views: 950,
    added: "5 hours ago",
  },
  {
    id: 3,
    name: "Historic City",
    image: "https://via.placeholder.com/150",
    views: 1300,
    added: "1 day ago",
  },
  {
    id: 4,
    name: "Modern Cityscape",
    image: "https://via.placeholder.com/150",
    views: 800,
    added: "3 days ago",
  },
  {
    id: 5,
    name: "Beautiful Beach",
    image: "https://via.placeholder.com/150",
    views: 1400,
    added: "2 hours ago",
  },
  {
    id: 6,
    name: "Mountain Retreat",
    image: "https://via.placeholder.com/150",
    views: 800,
    added: "5 hours ago",
  },
  {
    id: 7,
    name: "Historic City",
    image: "https://via.placeholder.com/150",
    views: 500,
    added: "1 day ago",
  },
  {
    id: 8,
    name: "Modern Cityscape",
    image: "https://via.placeholder.com/150",
    views: 1500,
    added: "3 days ago",
  },
];

const StandingSection = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Discover Popular Places</h2>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
          <h3 className="text-xl font-semibold mb-4 flex items-center border-b-2 pb-2">
            <AiOutlineClockCircle className="mr-2" /> Latest Places
          </h3>
          <div className="space-y-6 p-4 ">
            {places
              .sort((a, b) => new Date(b.added) - new Date(a.added))
              .slice(0, 4)
              .map((place) => (
                <div
                  key={place.id}
                  className=" flex justify-between bg-white text-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-20 h-20 rounded-md mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{place.name}</h4>
                      <p className="text-sm text-gray-600">{place.added}</p>
                    </div>
                  </div>
                  <div className="flex ">
                    <button className="text-end">View</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 flex items-center border-b-2  pb-2">
            <AiOutlineFire className="mr-2" /> Most Viewed Places
          </h3>
          <div className="space-y-6 p-4">
            {places
              .sort((a, b) => b.views - a.views)
              .slice(0, 4)
              .map((place) => (
                <div
                  key={place.id}
                  className="flex justify-between bg-white text-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-20 h-20 rounded-md mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{place.name}</h4>
                      <p className="text-sm text-gray-600">
                        {place.views} views
                      </p>
                    </div>
                  </div>
                  <div className="flex bg-blue-700 border p-2 rounded-lg">
                    <button className="text-end ">View</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandingSection;
