import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./views/header/header";
import MainView from "./views/main-view/mainView";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<MainView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
