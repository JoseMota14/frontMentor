import { createContext, ReactNode, useState } from "react";
import { InitQuestions, iQuestion } from "../interfaces/iQuestion";

interface iQuestionContext {
  questions: iQuestion[];
  setQuestions: React.Dispatch<React.SetStateAction<iQuestion[]>>;
}

interface iProvider {
  children: ReactNode;
}

const QuestionContext = createContext({} as iQuestionContext);

function QuestionProvider({ children }: iProvider) {
  const [questions, setQuestions] = useState<iQuestion[]>(InitQuestions);
  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
}

export { QuestionContext, QuestionProvider };
