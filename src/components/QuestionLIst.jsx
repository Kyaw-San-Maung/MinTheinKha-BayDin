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
      <div className="flex justify-start my-8 mx-48">
        <img
          src="https://th.bing.com/th/id/R.28a9b499422993cc80e3b5194f20607a?rik=%2bmfHu6SZsEanHg&pid=ImgRaw&r=0&sres=1&sresct=1"
          alt="Min Thein Kha"
          className="rounded-full w-12 h-13 "
        />
        <h2 className=" mx-3 font-bold text-3xl">သိလိုသောမေးခွန်း ရွေးပါ။</h2>
      </div>

      {data.map((question) => (
        <div key={question.id} className="mx-48 my-4">
          <div
            className="bg-blend-normal border rounded-xl border-orange-900 flex justify-between cursor-pointer"
            onClick={() => {
              dispatch(userQuestionChoice(question.questionNo));
              dispatch(userChoiceQuestion(question.questionName));
              navigate("/numberList");
            }}
          >
            <h2 className="py-3 mx-3">
              {question.questionNo}.
              <span className="mx-5">{question.questionName}</span>
            </h2>
            <button
              className="mx-5 border rounded-xl my-2 bg-orange-900 text-white font-bold px-5 py-1 text-xs"
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
