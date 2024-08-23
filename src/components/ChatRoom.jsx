import React from "react";

const chatrooms = [
  {
    name: 'manali',
    Discription: 'Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.',
    imageUrl:
      'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asadphoto-457882.jpg&fm=jpg',
  },
  {
    name: 'Goa',
    Discription: 'Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.',
    imageUrl:
      'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asadphoto-457882.jpg&fm=jpg',
  },
  {
    name: 'Hiking',
    Discription: 'Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.',
    imageUrl:
      'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asadphoto-457882.jpg&fm=jpg',
  },


]

const ChatRoom = () => {
  return (
    <>
{
  chatrooms.map((chatroom)=>(
    <div class="max-w-sm m-6 p-6 bg-white  rounded-lg  dark:bg-gray-800">
    <a href="#">
      <img
        class="rounded-t-lg"
        src={chatroom.imageUrl}
        alt=""
      />
    </a>
    <div class="p-5 border rounded-lg">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         {chatroom.name}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {chatroom.Discription}
      </p>
      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Join Group
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
  ))
}
    </>
  );
};

export default ChatRoom;
