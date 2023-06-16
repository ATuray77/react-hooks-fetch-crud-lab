import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  // //me making a function to handle when new question form is submitted
  // function handleAddQuestion(newQuestion) {
  //   setQuestions([...questions, newQuestion]);
  //   console.log(newQuestion);
  // }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
