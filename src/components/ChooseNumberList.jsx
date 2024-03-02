import { useQuery } from "react-query";
import { FetchNumberList } from "../api/FetNumberList";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userLuckeyChoice } from "../redux/Slice";

export const ChooseNumberList = () => {
  //Redux for state management
  const luckyNumber = useSelector((state) => state.number.luckyChoiceNumber);
  console.log(luckyNumber);
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
    <>
      <div className="grid grid-cols-8 mx-80 my-20">
        {data.map((number) => (
          <a
            onClick={() => {
              dispatch(userLuckeyChoice(number.eng));
              navigate(`/result`);
            }}
            key={number.id}
            className="cursor-pointer"
          >
            <div className="py-2 my-1 mx-1 border border-black rounded-full ">
              <p className="font-bold flex justify-center">{number.myan}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};
