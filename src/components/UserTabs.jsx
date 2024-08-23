import React, { useState } from "react";

const UserTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "Profile", content: <ProfileContent /> },
    { id: 1, title: "Dashboard", content: <DashboardContent /> },
    { id: 2, title: "Settings", content: <SettingsContent /> },
    { id: 3, title: "Messages", content: <MessagesContent /> },
  ];

  return (
    <div className="w-full">
      <ul className="flex space-x-2 border-b">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4 bg-white border rounded-b-lg">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

const ProfileContent = () => (
  <div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 ">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
);

const DashboardContent = () => (
  <div>
    <h3 className="text-xl font-bold mb-2">Dashboard</h3>
    <p>This is the Dashboard tab content. Dashboard details go here.</p>
  </div>
);

const SettingsContent = () => (
  <div>
    <h3 className="text-xl font-bold mb-2">Settings</h3>
    <p>This is the Settings tab content. Adjust your settings here.</p>
  </div>
);

const MessagesContent = () => (
  <div>
    <h3 className="text-xl font-bold mb-2">Messages</h3>
    <p>This is the Messages tab content. Check your messages here.</p>
  </div>
);

export default UserTabs;
