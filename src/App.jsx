import { Route, Routes } from "react-router-dom";
import "./App.css";
import { QuestionLIst } from "./components/QuestionLIst";
import { ChooseNumberList } from "./components/ChooseNumberList";
import { Result } from "./components/Result";

function App() {
  return (
    <>
      <h2 className="font-bold text-4xl justify-center flex">
        Min Thein Kha - Bay Din Question List
      </h2>
      <Routes>
        <Route path="/" element={<QuestionLIst />}></Route>
        <Route path="/numberList" element={<ChooseNumberList />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </>
  );
}

export default App;
