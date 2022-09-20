import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import MainView from "./views/main-view/mainView";

function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<MainView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
