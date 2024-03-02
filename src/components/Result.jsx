import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { AnswerList } from "../api/AnswerList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Result = () => {
  //Redux for managing the state
  const { questionChoiceNumber, luckyChoiceNumber } = useSelector(
    (state) => state.number
  );

  const navigate = useNavigate();

  //Making sure that the user choose the question and lucky number
  useEffect(() => {
    if (!questionChoiceNumber || !luckyChoiceNumber) {
      return navigate("/");
    }
  }, []);

  //React Query for fetching data from db.json
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["answer"],
    queryFn: AnswerList,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return JSON.stringify(`Error: ${error.message}`);

  //filtering the answer according to the user choice
  const [answerForUser] = data.filter(
    (answer) =>
      answer.questionNo === questionChoiceNumber &&
      answer.answerNo === luckyChoiceNumber
  );
  console.log(answerForUser);
  return (
    <div className="flex flex-col items-center scale-up-center">
      <div className="question my-10 text-center">
        <span className="text-2xl">မေးခွန်း</span>
        <h5 className="text-2xl mt-5">{questionChoiceNumber}</h5>
      </div>
      <h1 className="text-2xl ">ရလဒ် :</h1>
      <h3 className="mt-5 text-2xl mb-10 min-[300px]:p-2 text-center">
        {answerForUser?.answerResult}
      </h3>
      <button onClick={() => navigate("/")}>Back To QuestionList</button>
    </div>
  );
};
