import React from 'react'

function Overview({goals}){
    const totalSavings=goals.reduce((sum, goal)=>{
        return sum + Number(goal.savedAmount);
    }, 0)

    const completedGoal=goals.filter((goal)=>{
        return Number(goal.savedAmount)>=Number(goal.targetAmount);
    })
  return (
    <div>
        <h2>Overview</h2>
        <p><b>Total number of goals:</b> {goals.length}</p>
        <p><b>Total Amount Saved:</b> {totalSavings}</p>
        <p><b>Total Number of Goals Completed:</b> {completedGoal.length}</p>

    </div>
  )
}
export default Overview;
