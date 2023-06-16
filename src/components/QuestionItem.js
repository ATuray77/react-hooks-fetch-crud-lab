import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdatedAnswer }) {
  const { id, prompt, answers, correctIndex } = question;
  console.log(question);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  //me making patch function
  function handleCorrectAnswer() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: 0,
      }),
    })
      .then((r) => r.json())
      .then((updatedAnswer) => onUpdatedAnswer(updatedAnswer));
  }

  //me making the delete button a controlled component(event handler)
  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteQuestion(question));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onClick={handleCorrectAnswer}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
