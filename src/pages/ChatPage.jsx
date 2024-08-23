import React from "react";
import Nevbar from "../components/Nevbar";
import ChatUserList from "../components/ChatUserList";
import Chating from "../components/Chating";
import ChatLeftMenu from "../components/ChatLeftMenu";
import ChatRightMenu from "../components/ChatRightMenu";

const ChatPage = () => {
  return (
    <div>
      <div class="min-h-screen flex flex-col h-screen">
        {/* <Nevbar /> */}
        {/* <header class="bg-red-50">Header</header> */}
        {/* <!-- main container --> */}
        <div class="flex-1 flex flex-row overflow-y-hidden">
          <main class="flex-1 bg-white border overflow-y-auto">
            <Chating />
          </main>

          <nav class="order-first sm:w-20 border-r">
            <ChatLeftMenu />
          </nav>
          <nav class="order-first w-64 hidden lg:block overflow-y-auto">
            <ChatUserList />
          </nav>

          <aside class="w-72 hidden sm:hidden lg:block overflow-y-auto">
            <ChatRightMenu/>
          </aside>
        </div>
        {/* <!-- end main container --> */}

        {/* <footer class="bg-gray-100">Footer</footer> */}
      </div>
    </div>
  );
};

export default ChatPage;
