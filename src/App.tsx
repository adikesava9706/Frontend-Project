import { useState } from 'react'
import './App.css'
import Question from './component/Question/Question'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import QnAPage from './pages/QnAPage/QnAPage'
import SummaryPage from './pages/Summary/SummaryPage'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<QnAPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
