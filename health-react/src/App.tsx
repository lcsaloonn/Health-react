import { RegisterForm } from "components/forms";
import { Routes, Route } from "react-router-dom";
import NotFoundView from "views/notFind-view/notFindView";
import SingleExerciceView from "views/single-exercice-view/singleExerciceView";
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
          <Route path="exercices">
            <Route index element={<ExerciceView />} />
            <Route path=":id" element={<SingleExerciceView />} />
          </Route>

          <Route path="register" element={<RegisterForm />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
