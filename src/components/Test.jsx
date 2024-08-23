import React, { useState } from "react";
import {
  FaInbox,
  FaPaperPlane,
  FaFileAlt,
  FaArchive,
  FaTrash,
} from "react-icons/fa";
import Navbar from "./Nevbar";
import ChatApp from "./Dummychat";
import GroupChat from "./DummyGroup";
import NotificationPage from "./Notification";
import StandingSection from "./Tranding";

function Test() {
  const [activeTab, setActiveTab] = useState("inbox");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-20 bg-blue-700 text-white flex flex-col items-center">
        <div className="p-4">
          <h2 className="text-xl font-bold">MD</h2>
        </div>
        <nav className="mt-4 flex-1 flex flex-col items-center space-y-4">
          <div
            className={`p-4 cursor-pointer ${
              activeTab === "inbox" ? "bg-gray-700 rounded-lg" : ""
            }`}
            onClick={() => setActiveTab("inbox")}
          >
            <FaInbox className="w-6 h-6" />
          </div>
          <div
            className={`p-4 cursor-pointer ${
              activeTab === "sent" ? "bg-gray-700 rounded-lg" : ""
            }`}
            onClick={() => setActiveTab("sent")}
          >
            <FaPaperPlane className="w-6 h-6" />
          </div>
          <div
            className={`p-4 cursor-pointer ${
              activeTab === "drafts" ? "bg-gray-700 rounded-lg" : ""
            }`}
            onClick={() => setActiveTab("drafts")}
          >
            <FaFileAlt className="w-6 h-6" />
          </div>
          <div
            className={`p-4 cursor-pointer ${
              activeTab === "archive" ? "bg-gray-700 rounded-lg" : ""
            }`}
            onClick={() => setActiveTab("archive")}
          >
            <FaArchive className="w-6 h-6" />
          </div>
          <div
            className={`p-4 cursor-pointer ${
              activeTab === "trash" ? "bg-gray-700 rounded-lg" : ""
            }`}
            onClick={() => setActiveTab("trash")}
          >
            <FaTrash className="w-6 h-6" />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Nav */}
        <Navbar />

        {/* Content Area */}
        <main className="flex-1 p-2 bg-gray-100">
          {activeTab === "inbox" && <ChatApp />}
          {activeTab === "sent" && <GroupChat />}
          {activeTab === "drafts" && <NotificationPage />}
          {activeTab === "archive" && <StandingSection />}
          {activeTab === "trash" && <div>Trash Content</div>}
        </main>
      </div>
    </div>
  );
}

export default Test;
