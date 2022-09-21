import React from "react";
import { Routes, Route } from "react-router-dom";
import ExerciceView from "./views/exercice-view/exerciceView";
import Header from "./views/header/header";
import MainView from "./views/main-view/mainView";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="exercices" element={<ExerciceView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
