import React, {useEffect, useState} from 'react'
import GoalList from "./GoalList.js"

const App = () => {
  const [goals, setGoals]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/goals")
    .then(r=>r.json())
    .then(data=>{
      setGoals(data);
      console.log(data);
    })
  }, [])
  return (
    <div>
      <header>
        <h1>Smart Goal Planner</h1>
      </header>
      <main>
        <GoalList goals={goals} />
      </main>

    </div>
  )
}

export default App