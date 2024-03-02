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
  
  return <div>Result</div>;
};
