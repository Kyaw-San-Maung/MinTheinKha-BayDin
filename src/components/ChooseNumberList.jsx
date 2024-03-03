import { useQuery } from "react-query";
import { FetchNumberList } from "../api/FetNumberList";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userLuckeyChoice } from "../redux/Slice";

export const ChooseNumberList = () => {
  //Redux for state management
  const { luckyChoiceNumber, question } = useSelector((state) => state.number);
  console.log(luckyChoiceNumber);
  const dispatch = useDispatch();

  //React Query for data fetching form db.json
  const navigate = useNavigate();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["numberList"],
    queryFn: FetchNumberList,
  });
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return JSON.stringify(`Error: ${error.message}`);
  return (
    <div>
      <button
        className="px-10 py-2 mx-80 mt-5 border border-orange-900 rounded-full"
        onClick={() => navigate("/")}
      >
        နောက်သို့
      </button>
      <h2 className="font-bold text-xl mx-80 my-5">
        <span>မေးခွန်း : </span>
        {question}
      </h2>
      <div className="grid grid-cols-8 mx-80 ">
        {data.map((number) => (
          <a
            onClick={() => {
              dispatch(userLuckeyChoice(number.eng));
              navigate(`/result`);
            }}
            key={number.id}
            className="cursor-pointer"
          >
            <div className="py-2 my-1 mx-1 font-bold bg-orange-900 rounded-full text-white">
              <p className="font-bold flex justify-center">{number.myan}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
