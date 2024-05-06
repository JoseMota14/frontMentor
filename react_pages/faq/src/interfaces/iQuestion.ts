export interface iQuestion {
  id: number;
  topic: string;
  response: string;
  state: "OPEN" | "CLOSED";
}

export const InitQuestions: iQuestion[] = [
  { id: 1, topic: "How do I?", response: "Just do..", state: "CLOSED" },
  {
    id: 2,
    topic: "Where I the new?",
    response: "Is in the new",
    state: "CLOSED",
  },
];
