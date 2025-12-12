import React,{useState} from 'react'
import Question from '../../component/Question/Question'
import { useNavigate } from 'react-router-dom';

const QnA : any = [
  {
    "question":"What sound does a cat make?",
    "options":["Bhau-Bhau","Meow-Meow","Oink-Oink"],
    "ans":"Meow-Meow"
  },
  {
    "question":"What would you probably find in your fridge?",
    "options":["Shoes","Ice Cream","Books"],
    "ans":"Ice Cream"
  },
  {
    "question":"What color are bananas?",
    "options":["Blue","Yellow","Red"],
    "ans":"Yellow"
  },
  {
    "question":"How many stars are in the sky?",
    "options":["Two","Infinite","One Hundred"],
    "ans":"Infinite"
  }
]


function QnAPage() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // track selected answers for all questions
  const [answers, setAnswers] = useState<string[]>(Array(QnA.length).fill(''))

  function handleNextQuestion(){
    if(currentQuestion < QnA.length - 1){
      setCurrentQuestion(currentQuestion+1)
    }
  }

  function handlePrevQuestion(){
    if(currentQuestion >0){
      setCurrentQuestion(currentQuestion-1)
    }
  }

  function isFirstQuestion(){
    return currentQuestion === 0
  }

  function handleSelect(value:string){
    setAnswers(prev => {
      const copy = [...prev]
      copy[currentQuestion] = value
      return copy
    })
  }

  function handleSubmit(){
    const score = QnA.reduce((acc:any, q:any, idx:any) => {
      return acc + (answers[idx] === q.ans ? 1 : 0)
    }, 0)

    navigate("/summary", { state: { score, total: QnA.length } })
  }

  return (
    <div className="app-container">
      <h1>Test Your Knowledge</h1>
      <h3 className="subtitle">Answer all questions to see your results</h3>

      <Question data={QnA[currentQuestion]} selected={answers[currentQuestion]} onSelect={handleSelect} qIndex={currentQuestion} />

      <div className="controls">
        <button disabled={isFirstQuestion()} onClick={handlePrevQuestion}>←</button>

        {currentQuestion === QnA.length - 1 ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={handleNextQuestion}>→</button>
        ) }
      </div>
    </div>
  )
}

export default QnAPage