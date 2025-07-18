import React, {useEffect, useState} from 'react'
import GoalList from "./GoalList.js"
import GoalForm from './GoalForm.js';

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
  function handleAddedGoal(newGoal){
    setGoals([...goals, newGoal])
  }
  return (
    <div>
      <header>
        <h1>Smart Goal Planner</h1>
      </header>
      <main>
        <GoalList goals={goals} />
        <GoalForm onAddGoal={handleAddedGoal} />
  
      </main>

    </div>
  )
}

export default App