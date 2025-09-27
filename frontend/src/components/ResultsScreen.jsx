import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Trophy, Clock, Target, CheckCircle, XCircle, RotateCcw, Home } from "lucide-react";
import { mockQuestions } from "../mock";

const ResultsScreen = ({ quizState, setQuizState }) => {
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if quiz not completed properly
    if (!quizState.isQuizCompleted || !quizState.endTime || !quizState.answers.length) {
      navigate("/");
      return;
    }

    // Calculate results using the same questions that were used in the quiz
    const questions = quizState.generatedQuestions || mockQuestions[quizState.difficulty] || mockQuestions.Simple;
    const timeTaken = Math.floor((new Date(quizState.endTime) - new Date(quizState.startTime)) / 1000);
    
    let correctCount = 0;
    const incorrectAnswers = [];
    
    questions.forEach((question, index) => {
      const userAnswer = quizState.answers[index];
      if (userAnswer === question.correctAnswer) {
        correctCount++;
      } else {
        incorrectAnswers.push({
          questionIndex: index,
          question: question.question,
          userAnswer: userAnswer,
          correctAnswer: question.correctAnswer,
          options: question.options,
          explanation: question.explanation
        });
      }
    });

    setResults({
      score: correctCount,
      totalQuestions: questions.length,
      timeTaken: timeTaken,
      percentage: Math.round((correctCount / questions.length) * 100),
      incorrectAnswers: incorrectAnswers
    });
  }, [quizState, navigate]);

  const handleRestartQuiz = () => {
    setQuizState({
      userName: "",
      difficulty: "",
      currentQuestion: 0,
      answers: [],
      startTime: null,
      endTime: null,
      isQuizStarted: false,
      isQuizCompleted: false
    });
    navigate("/");
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getPerformanceLevel = (percentage) => {
    if (percentage >= 90) return { level: "Excellent!", color: "text-green-600", bgColor: "bg-green-100" };
    if (percentage >= 80) return { level: "Very Good", color: "text-blue-600", bgColor: "bg-blue-100" };
    if (percentage >= 70) return { level: "Good", color: "text-yellow-600", bgColor: "bg-yellow-100" };
    if (percentage >= 50) return { level: "Average", color: "text-orange-600", bgColor: "bg-orange-100" };
    return { level: "Needs Improvement", color: "text-red-600", bgColor: "bg-red-100" };
  };

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
        <div className="text-white text-xl">Calculating results...</div>
      </div>
    );
  }

  const performance = getPerformanceLevel(results.percentage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-4">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-6">
        {/* Results Header */}
        <Card className="backdrop-blur-sm bg-white/95 border-0 shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quiz Complete! 🎉
            </CardTitle>
            
            <p className="text-xl text-gray-600 font-medium">
              Great job, {quizState.userName}!
            </p>
          </CardHeader>

          <CardContent>
            {/* Performance Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
                <Trophy className="w-8 h-8 mx-auto text-green-600 mb-2" />
                <div className="text-2xl font-bold text-gray-800">{results.score}/{results.totalQuestions}</div>
                <p className="text-sm text-gray-600">Correct Answers</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
                <Target className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                <div className="text-2xl font-bold text-gray-800">{results.percentage}%</div>
                <p className="text-sm text-gray-600">Accuracy</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                <Clock className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <div className="text-2xl font-bold text-gray-800">{formatTime(results.timeTaken)}</div>
                <p className="text-sm text-gray-600">Time Taken</p>
              </div>
              
              <div className={`text-center p-4 rounded-lg ${performance.bgColor} border border-current`}>
                <div className={`text-2xl font-bold ${performance.color}`}>{performance.level}</div>
                <p className="text-sm text-gray-600">{quizState.difficulty} Level</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Your Performance</span>
                <span>{results.percentage}%</span>
              </div>
              <Progress value={results.percentage} className="h-4" />
            </div>
          </CardContent>
        </Card>

        {/* Incorrect Answers Review */}
        {results.incorrectAnswers.length > 0 && (
          <Card className="backdrop-blur-sm bg-white/95 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-500" />
                Review Incorrect Answers ({results.incorrectAnswers.length})
              </CardTitle>
              <p className="text-gray-600">Learn from these questions to improve your knowledge!</p>
            </CardHeader>

            <CardContent className="space-y-6">
              {results.incorrectAnswers.map((item, index) => (
                <div key={index} className="border-l-4 border-red-400 pl-6 py-4 bg-red-50 rounded-r-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Question {item.questionIndex + 1}: {item.question}
                  </h3>
                  
                  <div className="grid gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <span className="text-red-700">
                        Your answer: <strong>{item.options[item.userAnswer]}</strong>
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-700">
                        Correct answer: <strong>{item.options[item.correctAnswer]}</strong>
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                    <p className="text-blue-800">
                      <strong>Explanation:</strong> {item.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Perfect Score Celebration */}
        {results.score === results.totalQuestions && (
          <Card className="backdrop-blur-sm bg-gradient-to-r from-yellow-100 to-orange-100 border-0 shadow-xl">
            <CardContent className="text-center py-8">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="text-3xl font-bold text-orange-800 mb-2">Perfect Score!</h2>
              <p className="text-xl text-orange-700">You answered all questions correctly! Outstanding performance!</p>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleRestartQuiz}
            className="flex items-center gap-2 px-8 py-3 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg transform hover:scale-[1.05] transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5" />
            Take Another Quiz
          </Button>
          
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="flex items-center gap-2 px-8 py-3 text-lg border-2 hover:bg-gray-50 transform hover:scale-[1.05] transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;