import { useQuery } from "react-query";
import { FetchNumberList } from "../api/FetNumberList";

export const ChooseNumberList = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["numberList"],
    queryFn: FetchNumberList,
  });
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return JSON.stringify(`Error: ${error.message}`);
  return (
    <>
      {data.map((number) => (
        <div key={number.id}>
          <p>{number.myan}</p>
        </div>
      ))}
    </>
  );
};
