import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestions(questions));
  }, []);
  console.log(questions);

  //me making a function to handle when new question form is submitted
  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
    console.log(newQuestion);
  }

function handleUpdatedAnswer() {
  
}

  //me making a function to handle delete. it is then send as a prop
  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions)
  }


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestion} onUpdatedAnswer={handleUpdatedAnswer}/>
        ))}
        {/* display QuestionItem components here after fetching */}
        <QuestionForm onAddQuestionSubmitted={handleAddQuestion} />
      </ul>
    </section>
  );
}

// onAddQuestionSubmitted = { handleAddQuestion };

export default QuestionList;
