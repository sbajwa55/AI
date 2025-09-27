import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import QuizScreen from "./components/QuizScreen";
import ResultsScreen from "./components/ResultsScreen";

function App() {
  const [quizState, setQuizState] = useState({
    userName: "",
    difficulty: "",
    currentQuestion: 0,
    answers: [],
    startTime: null,
    endTime: null,
    isQuizStarted: false,
    isQuizCompleted: false
  });

  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <WelcomeScreen 
              quizState={quizState}
              setQuizState={setQuizState}
            />
          } />
          <Route path="/quiz" element={
            <QuizScreen 
              quizState={quizState}
              setQuizState={setQuizState}
            />
          } />
          <Route path="/results" element={
            <ResultsScreen 
              quizState={quizState}
              setQuizState={setQuizState}
            />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;