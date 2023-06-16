import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([]);
  //const [answers, setAnswers] = useState([]); //I set this up

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestions(questions));
  }, []);
  
   function handleAddQuestion(addedQuestion) {
     setQuestions([...questions, addedQuestion]);
   }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestionSubmitted={handleAddQuestion} /> : <QuestionList questions={questions} setQuestions={setQuestions} />}
    </main>
  );
}

export default App;
