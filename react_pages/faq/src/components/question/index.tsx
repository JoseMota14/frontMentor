import useQuestion from "../../hooks/useQuestion";
import { iQuestion } from "../../interfaces/iQuestion";
import "./styles.css";

interface QuestionProps {
  question: iQuestion;
}

function Question(props: QuestionProps) {
  const { questions, setQuestions } = useQuestion();
  const updateLineStatus = () => {
    // Create a copy of the questions array for immutability
    const updatedQuestions = [...questions];

    // Update the state of the matching question using spread syntax
    const updatedQuestionIndex = updatedQuestions.findIndex(
      (question) => question.id === props.question.id
    );

    if (updatedQuestionIndex !== -1) {
      const currentQuestion = updatedQuestions[updatedQuestionIndex];
      const newState = currentQuestion.state === "CLOSED" ? "OPEN" : "CLOSED";

      updatedQuestions[updatedQuestionIndex] = {
        ...updatedQuestions[updatedQuestionIndex],
        state: newState,
      };

      // Update the state with the modified questions array
      setQuestions(updatedQuestions);
    } else {
      console.warn(
        "Question with ID",
        props.question.id,
        "not found in the questions list."
      );
    }
  };

  return (
    <div className="question" onClick={updateLineStatus}>
      <div className="line">
        <b>{props.question.topic}</b>
        <div className="icon">
          {props.question.state == "OPEN" ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="minus3"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#301534"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="plus3"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#AD28EB"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      {props.question.state == "OPEN" && <p>{props.question.response}</p>}
    </div>
  );
}

export default Question;
