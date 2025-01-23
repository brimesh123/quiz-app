// src/components/Quiz.js

import React, { useState } from 'react';
import quizData from '../data/quizData.json';

const Quiz = () => {
  const [stage, setStage] = useState('category'); // stages: category, quiz, score
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setStage('quiz');
  };

  const handleAnswerClick = (selectedAnswer) => {
    const correctAnswer = selectedCategory.questions[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedCategory.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setStage('score');
    }
  };

  const restartQuiz = () => {
    setStage('category');
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div className="app">
      <div className="quiz-container">
        {stage === 'category' && (
          <div className="category-section">
            <h2>Select a Category</h2>
            <div className="categories">
              {quizData.map((cat, index) => (
                <button
                  key={index}
                  className="category-button"
                  onClick={() => handleCategorySelect(cat)}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>
        )}

        {stage === 'quiz' && selectedCategory && (
          <>
            <div className="question-section">
              <h2>
                Question {currentQuestion + 1} of {selectedCategory.questions.length}
              </h2>
              <p>{selectedCategory.questions[currentQuestion].question}</p>
            </div>
            <div className="options-section">
              {selectedCategory.questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </>
        )}

        {stage === 'score' && (
          <div className="score-section">
            <h2>
              You scored {score} out of {selectedCategory.questions.length}!
            </h2>
            <button onClick={restartQuiz}>Restart Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
