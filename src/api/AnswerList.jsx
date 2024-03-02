export async function AnswerList() {
  const response = await fetch("http://localhost:3000/answers").then((res) =>
    res.json()
  );
  return response;
}
