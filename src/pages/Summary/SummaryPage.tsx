import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function SummaryPage() {
  const navigate = useNavigate()
  const location = useLocation()

  const { score = 0, total = 0 } = (location.state as any) || {}
  const percent = total ? Math.round((score / total) * 100) : 0

  function handleStartAgain(){
    navigate("/")
  }
  return (
    <div className="app-container centered">
      <h1>Keep Learning</h1>
      <h6 style={{color:'#475569',marginTop:8}}>Your Final score is</h6>
      <h1 style={{marginTop:12}}>{percent}%</h1>
      <div style={{marginTop:28, display:'flex', gap:'12px', justifyContent:'center'}}>
        <button onClick={handleStartAgain} style={{padding:'10px 14px', borderRadius:'8px', border:'none', background:'#e6fbff', cursor:'pointer'}}>Start Again</button>
      </div>
    </div>
  )
}

export default SummaryPage