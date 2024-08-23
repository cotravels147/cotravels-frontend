import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nevbar from "./components/Nevbar";
import Test from "./components/Test";
import Hero from "./components/Hero";
import LandingPage from "./pages/LandingPage";
import ChatRoomSection from "./pages/ChatRoomSection";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UserProfile from "./pages/UserProfile";
import ChatPage from "./pages/ChatPage";
import CreateGroup from "./components/CreateGroup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chatrooms" element={<ChatRoomSection />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
