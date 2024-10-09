import React from "react";
import heartLife from "../assets/red-fill-heart.svg";

const QuestionCard = ({
  currentQuestion,
  currentQuestionIndex,
  randomQuestions,
  lives,
  isAnswered,
  selectedAnswer,
  handleValidate,
  handleNextQuestion,
  feedback,
}) => {
  return (
    <main>
      <section className="container_content">
        <section className="question_view">
          <header className="flex justify-between">
            <div className="container_item_header">
              <p>{currentQuestionIndex + 1}</p>
              <p>/</p>
              <p>{randomQuestions.length}</p>
            </div>

            <div
              className={lives === 0 ? "hidden" : "container_item_header lives"}
            >
              {Array(lives)
                .fill()
                .map((_, index) => (
                  <img key={index} src={heartLife} alt="Cantidad de vidas" />
                ))}
            </div>
          </header>
          <div className="container_img">
            <img src={currentQuestion.image} alt="Imagen Pregunta" />
          </div>
          <section className="question_container">
            <h4>{currentQuestion.question}</h4>
            <div className="options_container">
              {currentQuestion.answers.map((answer, i) => (
                <button
                  disabled={isAnswered}
                  key={i}
                  onClick={() => handleValidate(answer)}
                  className={
                    selectedAnswer === answer
                      ? answer.isCorrect
                        ? "isCorrect"
                        : "isIncorrect"
                      : ""
                  }
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </section>
          <div className="feedBack flex justify-between items-center gap-1">
            <p>{feedback}</p>
            <button
              className="button"
              onClick={handleNextQuestion}
              disabled={!isAnswered}
            >
              {currentQuestionIndex < randomQuestions.length - 1
                ? "SIGUIENTE"
                : "FINALIZAR"}
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default QuestionCard;
