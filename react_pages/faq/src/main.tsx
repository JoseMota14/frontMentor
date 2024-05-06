import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QuestionProvider } from "./context/questionContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QuestionProvider>
      <App />
    </QuestionProvider>
  </React.StrictMode>
);
