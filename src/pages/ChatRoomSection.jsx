import React, { useState } from "react";
import ChatRoom from "../components/ChatRoom";
import Nevbar from "../components/Nevbar";
import NewsLatter from "../components/NewsLatter";
import CreateGroup from "../components/CreateGroup";
import Modal from "../components/Modal";

const ChatRoomSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Nevbar />
      <div className="flex flex-row justify-between px-28 pt-10">
        <div className="text-2xl font-bold">Chat Room</div>

        <button
          onClick={openModal}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Open Modal
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <div className="flex flex-wrap justify-evenly">
        <ChatRoom />
      </div>
      <NewsLatter />
    </div>
  );
};

export default ChatRoomSection;
