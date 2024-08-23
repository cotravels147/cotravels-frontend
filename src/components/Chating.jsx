import React from "react";

const Chating = () => {
  return (
    <div className=" flex flex-col justify-between h-full">
      <div>
        <div className="border-2 bg-slate-100 flex p-4">
          <img
            class="rounded-full w-10 h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJWkNfvutn3ibqnR0SUJdP3P9KHdheZZ_Lg&s"
          />
          <div class="pl-2">
            <div class="font-semibold">
              <a class="hover:underline" href="#">
                Hicking
              </a>
            </div>
            <div class="text-xs text-gray-600">20 Online</div>
          </div>
        </div>
        <div className="p-4">
          <div className="text-start pb-4">
            <div className="">
              <div class="flex items-start gap-2.5">
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiczb7ZikH2v1myBVebIRAcoiko6UWh4A36w&s"
                  alt="Jese image"
                />
                <div class="flex flex-col gap-1 w-full max-w-[320px]">
                  <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span class="text-sm font-semibold text-gray-900 dark:text-white">
                      Jone
                    </span>
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                      11:47
                    </span>
                  </div>
                  <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <p class="text-sm font-normal text-gray-900 dark:text-white">
                      {" "}
                      You are right
                    </p>
                  </div>
                  {/* <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- component --> */}
      <div class="max-w-full">
        <div class="editor max-w-full w-full flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg">
          {/* <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text"/> */}
          <textarea
            class="description bg-gray-100 sec p-3 h-30 border border-gray-300 outline-none"
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
  );
};

export default Chating;
