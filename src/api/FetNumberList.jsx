export async function FetchNumberList() {
  const response = await fetch("http://localhost:3000/numberList").then((res) =>
    res.json()
  );

  return response;
}
