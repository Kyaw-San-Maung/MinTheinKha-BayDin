import { useQuery } from "react-query";
import "./App.css";

function App() {
  useQuery({
    queryKey: [""],
  });
  return <h1 className="text-red-800 text-3xl font-bold ">Hello world!</h1>;
}

export default App;
