import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of Italy?",
      answerOptions: [
        { answerText: "Milan", isCorrect: false },
        { answerText: "Naple", isCorrect: false },
        { answerText: "Rome", isCorrect: true },
        { answerText: "Florence", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "Paris", isCorrect: true },
        { answerText: "Nante", isCorrect: false },
        { answerText: "Bordeaux", isCorrect: false },
        { answerText: "Marseille", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Morocco?",
      answerOptions: [
        { answerText: "Marrakech", isCorrect: false },
        { answerText: "Casablanca", isCorrect: false },
        { answerText: "Fès", isCorrect: false },
        { answerText: "Rabat", isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital of Spain?",
      answerOptions: [
        { answerText: "Barcelona", isCorrect: false },
        { answerText: "Madrid", isCorrect: true },
        { answerText: "Las Palmas", isCorrect: false },
        { answerText: "Valencia", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Germany?",
      answerOptions: [
        { answerText: "Munich", isCorrect: false },
        { answerText: "Hamburg", isCorrect: false },
        { answerText: "Berlin", isCorrect: true },
        { answerText: "Bonn", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of China?",
      answerOptions: [
        { answerText: "Hangzhou", isCorrect: false },
        { answerText: "Shenzen", isCorrect: false },
        { answerText: "Shanghai", isCorrect: false },
        { answerText: "Beijin", isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital of Turkey?",
      answerOptions: [
        { answerText: "Ankara", isCorrect: true },
        { answerText: "Istanbul", isCorrect: false },
        { answerText: "Adana", isCorrect: false },
        { answerText: "Izmir", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Austria?",
      answerOptions: [
        { answerText: "Graz", isCorrect: false },
        { answerText: "Wien", isCorrect: true },
        { answerText: "Bratislava", isCorrect: false },
        { answerText: "Salisburg", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Slovenia?",
      answerOptions: [
        { answerText: "Zagreb", isCorrect: false },
        { answerText: "Goriza", isCorrect: false },
        { answerText: "Lubiana", isCorrect: true },
        { answerText: "Zadar", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Nigeria?",
      answerOptions: [
        { answerText: "Lagos", isCorrect: false },
        { answerText: "Kano", isCorrect: false },
        { answerText: "Niger", isCorrect: false },
        { answerText: "Abuja", isCorrect: true },
      ],
    },

  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
