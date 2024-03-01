export async function FetchQuestion() {
  const response = await fetch("http://localhost:3000/questions").then((res) =>
    res.json()
  );
  console.log("CAlling Json Server");
  return response;
}
