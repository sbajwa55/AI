import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Clock, User, Target, ArrowRight, ArrowLeft } from "lucide-react";
import { mockQuestions } from "../mock";

const QuizScreen = ({ quizState, setQuizState }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [questions, setQuestions] = useState([]);

  // Generate questions once when component mounts
  useEffect(() => {
    if (!quizState.generatedQuestions && quizState.difficulty) {
      const newQuestions = mockQuestions[quizState.difficulty] || mockQuestions.Simple;
      console.log('🎯 Generated questions for quiz:', newQuestions.length, 'questions for difficulty:', quizState.difficulty);
      console.log('📝 First question:', newQuestions[0]?.question);
      console.log('📝 First question correct answer index:', newQuestions[0]?.correctAnswer);
      console.log('📝 First question options:', newQuestions[0]?.options);
      setQuestions(newQuestions);
      setQuizState(prev => ({
        ...prev,
        generatedQuestions: newQuestions
      }));
    } else if (quizState.generatedQuestions) {
      console.log('🔄 Using existing generated questions');
      setQuestions(quizState.generatedQuestions);
    }
  }, [quizState.difficulty, quizState.generatedQuestions, setQuizState]);
  const navigate = useNavigate();

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (quizState.startTime) {
        setTimeElapsed(Math.floor((new Date() - new Date(quizState.startTime)) / 1000));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState.startTime]);

  // Redirect if quiz not started properly
  useEffect(() => {
    if (!quizState.isQuizStarted || !quizState.userName || !quizState.difficulty) {
      navigate("/");
    }
  }, [quizState, navigate]);

  const currentQuestion = questions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex) => {
    console.log(`Selected answer index: ${answerIndex} for question ${quizState.currentQuestion + 1}`);
    console.log(`Current question correct answer: ${currentQuestion.correctAnswer}`);
    console.log(`Selected option: "${currentQuestion.options[answerIndex]}"`);
    console.log(`Correct option: "${currentQuestion.options[currentQuestion.correctAnswer]}"`);
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      // Store the answer
      const newAnswers = [...quizState.answers];
      newAnswers[quizState.currentQuestion] = selectedAnswer;
      
      const isLastQuestion = quizState.currentQuestion === questions.length - 1;
      
      if (isLastQuestion) {
        // Quiz completed
        setQuizState({
          ...quizState,
          answers: newAnswers,
          endTime: new Date(),
          isQuizCompleted: true
        });
        navigate("/results");
      } else {
        // Move to next question
        setQuizState({
          ...quizState,
          answers: newAnswers,
          currentQuestion: quizState.currentQuestion + 1
        });
        setSelectedAnswer(null);
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (quizState.currentQuestion > 0) {
      const newCurrentQuestion = quizState.currentQuestion - 1;
      setQuizState({
        ...quizState,
        currentQuestion: newCurrentQuestion
      });
      // Set the previously selected answer if any
      const previousAnswer = quizState.answers[newCurrentQuestion];
      console.log(`Going back to question ${newCurrentQuestion + 1}, previous answer was: ${previousAnswer}`);
      setSelectedAnswer(previousAnswer !== undefined ? previousAnswer : null);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentQuestion || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
        <div className="text-white text-xl">Loading Questions...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Stats */}
        <Card className="mb-6 backdrop-blur-sm bg-white/95 border-0 shadow-xl">
          <CardContent className="p-4">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <User className="w-5 h-5 text-purple-600" />
                <span className="font-medium">{quizState.userName}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-700">
                <Target className="w-5 h-5 text-pink-600" />
                <span className="font-medium">{quizState.difficulty} Level</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{formatTime(timeElapsed)}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {quizState.currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Question Card */}
        <Card className="backdrop-blur-sm bg-white/95 border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Answer Options */}
            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className={`
                    p-6 h-auto text-left justify-start text-lg font-medium transition-all duration-300 transform hover:scale-[1.02]
                    ${selectedAnswer === index 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                      : 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-300'
                    }
                  `}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0
                      ${selectedAnswer === index 
                        ? 'bg-white text-purple-600' 
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </Button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={quizState.currentQuestion === 0}
                className="flex items-center gap-2 px-6 py-3 text-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </Button>
              
              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="flex items-center gap-2 px-6 py-3 text-lg bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg transform hover:scale-[1.05] transition-all duration-300"
              >
                {quizState.currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizScreen;