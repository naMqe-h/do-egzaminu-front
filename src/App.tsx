import { useEffect, useState } from "react";
import { ChooseQuestions } from "./components/ChooseQuestions";
import { Questions } from "./components/Questions";

const App = () => {
  const [ready, setReady] = useState<boolean>(false)
  const [questions, setQuestions] = useState<any[]>([])

  useEffect(() => {
    console.log(questions);
  }, [questions])

  return (
    <div>

      {ready ? <Questions questions={questions} /> : <ChooseQuestions setReady={setReady} setQuestions={setQuestions} />}

    </div>
  )  

}

export default App;
