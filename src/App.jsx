import { useQuery } from "react-query";
import "./App.css";
import { FetchQuestion } from "./api/FetchQuestion";

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["questions"],
    queryFn: FetchQuestion,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return JSON.stringify(`Error: ${error.message}`);

  console.log("This is data :", data);
  return (
    <>
      <h2 className="font-bold text-4xl justify-center flex">
        Min Thein Kha - Bay Din Question List
      </h2>
      {data.map((question) => (
        <div key={question.id} className="mx-52 my-4">
          <div className="bg-blend-normal border rounded border-black justify-start">
            <h2 className="py-3 mx-3">
              {question.questionNo}.
              <span className="mx-5">{question.questionName}</span>
            </h2>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
