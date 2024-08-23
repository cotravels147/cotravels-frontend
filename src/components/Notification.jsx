import React from "react";

const notifications = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    message: "John Doe commented on your post.",
    time: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    message: "Jane Smith liked your photo.",
    time: "4 hours ago",
  },
  {
    id: 3,
    user: {
      name: "Bob Johnson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    message: "Bob Johnson started following you.",
    time: "6 hours ago",
  },
];

const trendingHashtags = [
  "#Travel",
  "#Foodie",
  "#Photography",
  "#Adventure",
  "#Nature",
];

const trendingTrips = [
  { name: "Trip to Bali", link: "/trips/bali" },
  { name: "Hiking in the Alps", link: "/trips/alps" },
  { name: "Safari in Kenya", link: "/trips/kenya" },
  { name: "Exploring Tokyo", link: "/trips/tokyo" },
  { name: "Cruise to the Bahamas", link: "/trips/bahamas" },
];

const NotificationPage = () => {
  return (
    <div className="flex flex-col md:flex-row  h-full bg-gray-100 min-h-screen  p-4">
      {/* Notification Feed */}
      <div className="w-full md:w-2/3 p-6">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50"
            >
              <div className="flex items-start">
                <img
                  alt={notification.user.name}
                  src={notification.user.avatar}
                  className="h-10 w-10 rounded-full mr-4"
                />
                <div className="flex-1">
                  <p className="text-gray-800">
                    <span className="font-semibold">
                      {notification.user.name}
                    </span>{" "}
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-3 text-gray-500">
                <button className="flex items-center hover:text-gray-700">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 7l-5 5m0 0l5 5m-5-5h12"
                    ></path>
                  </svg>
                  Reply
                </button>
                <button className="flex items-center hover:text-gray-700">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Like
                </button>
                <button className="flex items-center hover:text-gray-700">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m0-4h.01M12 4v1m8 4h-1v1h-1v-1h-1v1h-1V9h1V8h1v1h1V8h1v1zM6 9H5v1H4v-1H3v1H2V9h1V8h1v1h1V8h1v1zm11-1v1h-1V8h1zM5 8v1H4V8h1zm0 0v1H4V8h1z"
                    ></path>
                  </svg>
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-1/3 p-6 bg-white border-l border-gray-300">
        {/* Trending Hashtags */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Trending Hashtags</h3>
          <div className="flex flex-wrap gap-2">
            {trendingHashtags.map((hashtag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300"
              >
                {hashtag}
              </span>
            ))}
          </div>
        </div>

        {/* Trending Trips */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Trending Trips</h3>
          <ul className="space-y-2">
            {trendingTrips.map((trip, index) => (
              <li key={index}>
                <a href={trip.link} className="text-blue-600 hover:underline">
                  {trip.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
