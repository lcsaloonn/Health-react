import { RegisterForm } from "components/forms";
import { appendFile } from "fs";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HttpService } from "services/http/http.service";

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
          <Route path="register" element={<RegisterForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
