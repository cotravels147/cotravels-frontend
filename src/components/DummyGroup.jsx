import React, { useState } from "react";
import { FaUser, FaComment, FaInfoCircle } from "react-icons/fa";

const groups = [
  {
    id: 1,
    name: "Engineering Team",
    members: [
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
    ],
    imageUrl:
      "https://img.freepik.com/premium-photo/view-man-profile-hiking-mountain-trail-with-stunning-view-surrounding-landscape_124507-139091.jpg?w=1060",
    details: "3h ago",
  },
  {
    id: 2,
    name: "Product Team",
    members: [
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
    ],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRia4LtuGW-RKdanqCy9qiWmRxykKW4Tqcv6A&s",
    details: "Online",
  },
];

const GroupChat = () => {
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);

  return (
    <div className="flex flex-col h-full md:flex-row bg-white text-black border rounded-xl ">
      {/* Groups List */}
      <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-200">
        <h2 className="text-xl font-bold mb-4">Groups</h2>
        <ul>
          {groups.map((group) => (
            <li
              key={group.id}
              onClick={() => setSelectedGroup(group)}
              className={`divide-y p-4 divide-gray-700 flex items-center cursor-pointer rounded-md hover:bg-gray-200 ${
                selectedGroup.id === group.id ? "bg-gray-200" : ""
              }`}
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  alt=""
                  src={group.imageUrl}
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {group.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {group.details}
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
            src={selectedGroup.imageUrl}
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
          />
          <div className="pl-2">
            <div className="font-semibold">
              <a className="hover:underline" href="#">
                {selectedGroup.name}
              </a>
            </div>
            <div className="text-xs text-gray-600">{selectedGroup.details}</div>
          </div>
        </div>
        <div className="flex-1 p-4 rounded-lg overflow-y-auto">
          <div className="text-sm text-gray-400">No messages yet.</div>
        </div>
        <div className="max-w-full">
          <div className="editor max-w-full w-full flex flex-col text-gray-800 border-t p-4">
            <textarea
              className="description bg-gray-100 sec p-3 h-30 border rounded-lg border-gray-300 outline-none"
              spellCheck="false"
              placeholder="Type your message..."
            ></textarea>
            <div className="icons flex text-gray-500 m-2">
              <button
                type="submit"
                className="inline-flex justify-center text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
              >
                <FaComment className="w-6 h-6 rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Group Details */}
      <div className="w-full md:w-1/4 p-4 border-t md:border-t-0 md:border-l border-gray-200">
        <div>
          <div className="flex flex-col items-center p-6 pt-10">
            <img
              alt=""
              src={selectedGroup.imageUrl}
              className="h-40 w-40 rounded-full border"
            />
            <div className="font-bold pt-4">{selectedGroup.name}</div>
            <div>{selectedGroup.details}</div>
          </div>
          <div className="flex justify-around px-10 py-4">
            {selectedGroup.members.map((member) => (
              <div key={member.id} className="text-center">
                <img
                  src={member.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                {/* <div className="text-xs">{member.name}</div> */}
              </div>
            ))}
          </div>
          <div className="flex justify-between p-4">
            <div>
              <div>Location</div>
              <div>Contact</div>
              <div>Call</div>
              <div>Time</div>
            </div>
            <div className="text-end">
              <div>Manali</div>
              <div>Not Available</div>
              <div>+91 000000000</div>
              <div>16 June</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
