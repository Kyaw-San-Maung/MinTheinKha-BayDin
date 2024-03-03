import { useQuery } from "react-query";
import { FetchQuestion } from "../api/FetchQuestion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userChoiceQuestion, userQuestionChoice } from "../redux/Slice";

export const QuestionLIst = () => {
  //Redux for managing the state
  const { questionNumber, question } = useSelector((state) => state.number);
  console.log(questionNumber, "This is question : ", question);
  const dispatch = useDispatch();

  //React Query Part for fetching data from json
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["questions"],
    queryFn: FetchQuestion,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return JSON.stringify(`Error: ${error.message}`);

  //Redux for doing state management

  return (
    <div>
      <h2 className="my-4 justify-center content-center">
        သိလိုသောမေးခွန်း ရွေးပါ။
      </h2>
      {data.map((question) => (
        <div key={question.id} className="mx-48 my-4">
          <div className="bg-blend-normal border rounded-xl border-black flex justify-between">
            <h2 className="py-3 mx-3">
              {question.questionNo}.
              <span className="mx-5">{question.questionName}</span>
            </h2>
            <button
              className="mx-5 border rounded-xl my-2 bg-black text-white font-bold px-5 py-1 text-xs"
              onClick={() => {
                dispatch(userQuestionChoice(question.questionNo));
                dispatch(userChoiceQuestion(question.questionName));
                navigate("/numberList");
              }}
            >
              Choose
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
