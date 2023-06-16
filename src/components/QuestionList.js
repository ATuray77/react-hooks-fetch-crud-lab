import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";

function QuestionList({ questions, setQuestions }) {
  //console.log(questions);

  //me making a function to handle when new question form is submitted

  //me creating a function to handle change of answer: PATCH
  function handleUpdatedQuestion(updatedQuestion) {
    const updatedQuestions = questions.map((question, index) => {
      if (question.index === updatedQuestion.index) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  //me making a function to handle delete. it is then send as a prop
  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestion} onUpdatedQuestion={handleUpdatedQuestion} />
        ))}
        {/* display QuestionItem components here after fetching */}
      </ul>
    </section>
  );
}

// onAddQuestionSubmitted = { handleAddQuestion };

export default QuestionList;
