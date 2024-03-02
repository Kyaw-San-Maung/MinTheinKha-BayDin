import { useQuery } from "react-query";
import { FetchNumberList } from "../api/FetNumberList";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

export const ChooseNumberList = () => {
  const luckyNumber = useSelector((state) => state.number.luckyChoiceNumber);
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
        <p>Hi This is lucky number {luckyNumber}</p>
      </div>
    </>
  );
};
