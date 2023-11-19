import React from "react";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-['Roboto']">
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
