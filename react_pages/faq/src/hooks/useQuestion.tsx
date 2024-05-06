import { useContext } from "react";
import { QuestionContext } from "../context/questionContext";

export default function useQuestion() {
  const context = useContext(QuestionContext);

  return context;
}
