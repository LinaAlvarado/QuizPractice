import React, {  useState } from "react";
import { questions } from "../data";
import Result from "../components/Result";
import QuestionCard from "../components/Question";

const QuestionView = () => {
  // Función para mezclar las preguntas
  const shuffleQuestions = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Función para obtener solo 6 preguntas aleatorias
  const getRandomQuestions = () => {
    const shuffled = shuffleQuestions(questions);
    return shuffled.slice(0, 6);
  };

  const [randomQuestions, setRandomQuestions] = useState(getRandomQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [lives, setLives] = useState(3);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  const [isAnswered, setIsAnswered] = useState(false);

  const [score, setScore] = useState(0);

  // Manejar avanzar a la siguiente pregunta
  const handleNextQuestion = () => {
    if (currentQuestionIndex < randomQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback(" ");
      setIsAnswered(false);
    } else {
      setCurrentQuestionIndex(randomQuestions.length);
    }
  };

  const validateAnswer = (answer, currentQuestion) => {
    if (answer.isCorrect) {
      setScore((prevScore) => prevScore + currentQuestion.score);
      setFeedback(`¡Correcto! La respuesta correcta es ${answer.text}`);
      return true; // Respuesta correcta
    } else {
      setFeedback(
        "Incorrecto. La respuesta correcta es: " +
          currentQuestion.answers.find((a) => a.isCorrect).text
      );
      setLives((prevLives) => prevLives - 1);
      return false; // Respuesta incorrecta
    }
  };

  const handleValidate = (answer) => {
    if (lives <= 0) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    // Llama a la función de validación y pasa currentQuestion
    validateAnswer(answer, currentQuestion);
  };

  // Si aún no hay preguntas cargadas, no renderizar nada
  if (randomQuestions.length === 0) {
    return <p>Cargando...</p>;
  }

  // Obtener la pregunta actual
  const currentQuestion = randomQuestions[currentQuestionIndex];
  if (lives === 0) {
    return <Result message="¡Se acabaron tus vidas!" score={score} />;
  }

  if (currentQuestionIndex === randomQuestions.length) {
    return <Result message="¡Has completado el cuestionario!" score={score} />;
  }

  return (
    <QuestionCard
      currentQuestion={currentQuestion}
      currentQuestionIndex={currentQuestionIndex}
      randomQuestions={randomQuestions}
      lives={lives}
      isAnswered={isAnswered}
      selectedAnswer={selectedAnswer}
      handleValidate={handleValidate}
      handleNextQuestion={handleNextQuestion}
      feedback={feedback}
    />
  );
};

export default QuestionView;
