import React from 'react'

function Question(props:any) {
  const { data, selected, onSelect, qIndex } = props

  return (
    <div className="question-card">
      <h3>{data.question}</h3>
      <div className="options">
        {data.options.map((opt:string, idx:number) => (
          <label key={idx} className={`option ${selected === opt ? 'selected' : ''}`}>
            <input
              type="radio"
              name={`question-${qIndex}`}
              value={opt}
              checked={selected === opt}
              onChange={() => onSelect(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default Question