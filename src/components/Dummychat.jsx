import React, { useState } from "react";
import { FaUser, FaComment, FaInfoCircle } from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    details: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    id: 2,
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    details: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    id: 3,
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    details: "Online",
  },
  {
    id: 4,
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    details: null,
  },
  {
    id: 5,
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    details: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    id: 6,
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    details: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];

const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <div className="flex flex-col h-full md:flex-row bg-white text-black border rounded-xl ">
      {/* Users List */}
      <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-200">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`divide-y p-4 divide-gray-700 flex items-center cursor-pointer rounded-md hover:bg-gray-200 ${
                selectedUser.id === user.id ? "bg-gray-200" : ""
              }`}
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  alt=""
                  src={user.imageUrl}
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {user.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Content */}
      <div className="flex-1 flex flex-col">
        <div className="border-b bg-gary-100 flex p-4">
          <img
            alt=""
            src={selectedUser.imageUrl}
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
          />
          <div class="pl-2">
            <div class="font-semibold">
              <a class="hover:underline" href="#">
                {selectedUser.name}
              </a>
            </div>
            <div class="text-xs text-gray-600">{selectedUser.details}</div>
          </div>
        </div>
        <div className="flex-1 p-4 rounded-lg overflow-y-auto">
          <div className="text-sm text-gray-400">No messages yet.</div>
        </div>
        <div class="max-w-full">
          <div class="editor max-w-full w-full flex flex-col text-gray-800 border-t  p-4">
            {/* <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text"/> */}
            <textarea
              class="description bg-gray-100 sec p-3 h-30 border rounded-lg border-gray-300 outline-none"
              spellcheck="false"
              placeholder="Describe everything about this post here"
            ></textarea>

            {/* <!-- icons --> */}
            <div class="icons flex text-gray-500 m-2">
              <svg
                class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <svg
                class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <svg
                class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="count ml-auto text-gray-400 text-xs font-semibold">
                <button
                  type="submit"
                  class="inline-flex justify-center text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-6 h-6 rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* <!-- buttons --> */}
          </div>
        </div>
      </div>

      {/* User Details */}
      <div className="w-full md:w-1/4 p-4 border-t md:border-t-0 md:border-l border-gray-200">
        <div>
          <div className="flex flex-col items-center p-6 pt-10">
            <div>
              <img
                alt=""
                src={selectedUser.imageUrl}
                className="h-40 w-40 rounded-full border"
              />
            </div>
            <div className="font-bold pt-4">{selectedUser.name}</div>
            <div>{selectedUser.details} </div>
          </div>
          <div className="flex justify-around px-10 py-4">
            <div className="bg-stone-100 rounded-lg p-2">
              <svg
                className="w-[25px] h-[25px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="bg-stone-100 rounded-lg p-2">
              <svg
                className="w-[25px] h-[25px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
              </svg>
            </div>
            <div className="bg-stone-100 rounded-lg p-2">
              <svg
                className="w-[25px] h-[25px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <div>
              <div>Location</div>
              <div>Contect</div>
              <div>Call</div>
              <div>Time</div>
            </div>
            <div className="text-end">
              <div>Manali</div>
              <div>Not Available</div>
              <div>+91 000000000</div>
              <div>16 june</div>
            </div>
          </div>
        </div>
        {/* <h2 className="text-xl font-bold mb-4">User Details</h2>
        <div className="flex items-center mb-4">
          <img
            alt=""
            src={selectedUser.imageUrl}
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
          />
          <div>
            <div className="text-lg">{selectedUser.name}</div>
            <div className="text-sm text-gray-400">{selectedUser.details}</div>
          </div>
        </div>
        <div className="flex items-center">
          <FaInfoCircle className="h-5 w-5 mr-2 text-gray-400" />
          <span className="text-gray-400">
            Additional info about {selectedUser.email}
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default ChatApp;
