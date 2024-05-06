import "./App.css";
import Question from "./components/question";
import useQuestion from "./hooks/useQuestion";

function App() {
  const { questions } = useQuestion();

  return (
    <div className="container">
      <div className="card">
        <h1>FAQ's</h1>
        <div>
          {questions?.map((el, index) => {
            return <Question question={el}></Question>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
