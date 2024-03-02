import { useQuery } from "react-query";
import { FetchQuestion } from "../api/FetchQuestion";
import { useNavigate } from "react-router-dom";

export const QuestionLIst = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["questions"],
    queryFn: FetchQuestion,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return JSON.stringify(`Error: ${error.message}`);

  return (
    <div>
      {data.map((question) => (
        <div key={question.id} className="mx-52 my-4">
          <div className="bg-blend-normal border rounded-xl border-black flex justify-between">
            <h2 className="py-3 mx-3">
              {question.questionNo}.
              <span className="mx-5">{question.questionName}</span>
            </h2>
            <button
              className="mx-5 border rounded-xl my-2 bg-black text-white font-bold px-3 py-1 text-xs"
              onClick={() => navigate(`/numberList`)}
            >
              Choose
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
