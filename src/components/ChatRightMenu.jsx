import React from "react";

const ChatRightMenu = () => {
  return (
    <div >
        <div className="flex flex-col items-center p-6 pt-10">
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJWkNfvutn3ibqnR0SUJdP3P9KHdheZZ_Lg&s" className="h-40 w-40 rounded-full border" />
      </div>
      <div className="font-bold pt-4">Explore Interusted</div>
      <div> Active Now</div>
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
  );
};

export default ChatRightMenu;
