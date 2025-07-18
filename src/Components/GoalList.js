import React from 'react'

function GoalList ({goals}) {
    const goalsArray=goals.map((goal)=>{
        return (
            <div key={goal.id}>
                <h1>{goal.name}</h1>
                <p><b>Target Amount:</b>{goal.targetAmount}</p>
                <p><b>Category:</b>{goal.category}</p>
                <p><b>Deadline:</b>{goal.deadline}</p>
                <p><b>Saved Amount</b>{goal.savedAmount}</p>
                   
            </div>
            
        )

    })
  return (
    <div>
        <div>{goalsArray}</div>

    </div>
  )
}
export default GoalList;
