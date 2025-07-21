import React, {useEffect, useState} from 'react';
import GoalList from '../Components/GoalList';
import GoalForm from '../Components/GoalForm';
import Deposits from '../Components/Deposits';
import Overview from '../Components/Overview';

function Goals (){
    const [goals, setGoals]=useState([]);
  useEffect(()=>{
    fetch("https://goal-server-1.onrender.com/goals")
    .then(r=>r.json())
    .then(data=>{
      setGoals(data);
      console.log(data);
    })
  }, [])
  function handleAddedGoal(newGoal){
    setGoals([...goals, newGoal])
  }
  
  function handleUpdates(updatedGoal){
    const updatedGoals=goals.map((goal)=>{
      return goal.id===updatedGoal.id?updatedGoal : goal
    })
    setGoals(updatedGoals)

  }

  function handleDeleteGoal(deletedGoalId){
    const deletedGoals=goals.filter((goal)=>{
      return goal.id!==deletedGoalId
    })
    setGoals(deletedGoals);
  }
  return (
    <div>
        <h2>Financial Goals</h2>
        <GoalList goals={goals} onUpdateGoal={handleUpdates} onDeleteGoal={handleDeleteGoal}/>
        <GoalForm onAddGoal={handleAddedGoal} />
        <Deposits goals={goals} onUpdateGoal={handleUpdates} />
        <Overview goals={goals} />

    
        

    </div>
  )
}

export default Goals;