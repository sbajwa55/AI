import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Brain, Trophy, Clock, Target } from "lucide-react";

const WelcomeScreen = ({ quizState, setQuizState }) => {
  const [userName, setUserName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (userName.trim() && difficulty) {
      setQuizState({
        ...quizState,
        userName: userName.trim(),
        difficulty: difficulty,
        startTime: new Date(),
        isQuizStarted: true,
        currentQuestion: 0,
        answers: []
      });
      navigate("/quiz");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <Card className="w-full max-w-2xl relative z-10 backdrop-blur-sm bg-white/95 shadow-2xl border-0">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <Brain className="w-10 h-10 text-white" />
          </div>
          
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            GKQA
          </CardTitle>
          
          <p className="text-xl text-gray-600 font-medium">
            General Knowledge Quiz & Assessment
          </p>
          
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            Test your world knowledge across History, Math, Science, Geography, Culture, Sports, and Politics with our AI-powered quiz platform.
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-purple-100">
              <Trophy className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <h3 className="font-semibold text-gray-800">Score Tracking</h3>
              <p className="text-sm text-gray-600">Get detailed results</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-pink-50 to-red-50 border border-pink-100">
              <Clock className="w-8 h-8 mx-auto text-pink-600 mb-2" />
              <h3 className="font-semibold text-gray-800">Time Tracking</h3>
              <p className="text-sm text-gray-600">Monitor your speed</p>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
              <Target className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-800">Explanations</h3>
              <p className="text-sm text-gray-600">Learn from mistakes</p>
            </div>
          </div>

          {/* Input Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="userName" className="text-lg font-medium text-gray-700">
                Enter Your Name
              </Label>
              <Input
                id="userName"
                type="text"
                placeholder="What should we call you?"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="h-12 text-lg border-2 focus:border-purple-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-lg font-medium text-gray-700">
                Select Difficulty Level
              </Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="h-12 text-lg border-2 focus:border-purple-500">
                  <SelectValue placeholder="Choose your challenge level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Simple" className="text-lg py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Simple - Perfect for beginners</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="Medium" className="text-lg py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Medium - Good challenge</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="Advanced" className="text-lg py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Advanced - Expert level</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleStartQuiz}
              disabled={!userName.trim() || !difficulty}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Start Quiz Adventure 🚀
            </Button>
          </div>

          <div className="text-center text-sm text-gray-500 space-y-1">
            <p>✨ 12 Questions • Multiple Choice • Instant Results</p>
            <p>🎯 Get explanations for all incorrect answers</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeScreen;