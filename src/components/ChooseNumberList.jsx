import { useQuery } from "react-query";
import { FetchNumberList } from "../api/FetNumberList";
import { useNavigate } from "react-router-dom";
import { Result } from "./Result";

export const ChooseNumberList = () => {
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
              <Result />;
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
