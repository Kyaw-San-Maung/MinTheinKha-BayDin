import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { AnswerList } from "../api/AnswerList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Result = () => {
  //Redux for managing the state
  const { questionChoiceNumber, luckyChoiceNumber, question } = useSelector(
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
    <div>
      <button
        onClick={() => navigate("/")}
        className="mx-48 mt-10 mb-4 font-bold rounded-full border border-orange-900 px-7 py-3"
      >
        ထပ်မေးမယ်
      </button>
      <div className="border bg-orange-900 mx-48 rounded-xl">
        <div className="px-20 py-20">
          <div className="flex">
            <h5 className="text-2xl font-bold text-white">
              <span className="">မေးခွန်း : </span>
              {question}
            </h5>
          </div>

          <h3 className="text-2xl font-bold text-white mt-4">
            <span className="">ရလဒ် : </span>
            {answerForUser?.answerResult}
          </h3>
        </div>
      </div>
    </div>
  );
};
