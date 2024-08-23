import React from "react";
import UserTabs from "../components/UserTabs";
import Navbar from "../components/Nevbar";

const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <img
        src="https://www.beach-backgrounds.com/wallpapers/thumbnails/two-boats-on-the-beach-of-the-ko-lipe-island-wallpaper-1008x380-469.jpg"
        className="w-full h-96"
      ></img>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6 -mt-32 sticky">
                <div className="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/94.jpg"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 className="text-xl font-bold">John Doe</h1>
                  <p className="text-gray-700">Mountain Lover</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="#"
                      className="bg-blue-500 w-44 text-center hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Modify
                    </a>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex justify-between">
                  <div>
                    <div className="text-xl font-bold">Tripe View</div>
                    <div className="text-xl font-bold">Collabration</div>
                    <div className="text-xl font-bold">Groups</div>
                    <div className="text-xl font-bold">Buddies</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">245</div>
                    <div className="text-xl font-bold">76</div>
                    <div className="text-xl font-bold">89</div>
                    <div className="text-xl font-bold">64</div>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <h1 className="text-xl font-bold py-4">About Me</h1>
                <p>
                  But then I found a{" "}
                  <a href="#">
                    component library based on Tailwind CSS called Flowbite
                  </a>
                  . It comes with the most commonly used UI components, such as
                  buttons, navigation bars, cards, form elements, and more which
                  are conveniently built with the utility classes from Tailwind
                  CSS.
                </p>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg">
                <UserTabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
