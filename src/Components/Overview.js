import React from 'react'

function Overview({goals}){
    const totalSavings=goals.reduce((sum, goal)=>{
        return sum + Number(goal.savedAmount);
    }, 0)

    const completedGoal=goals.filter((goal)=>{
        return Number(goal.savedAmount)>=Number(goal.targetAmount);
    })

    const remainingTime=goals.map((goal)=>{
        const deadlineDate=new Date(goal.deadline);
        const today= new Date();
        const timeDifference=deadlineDate-today;
        const daysLeft=Math.ceil(timeDifference /(1000 * 60 * 60 *24));

        return{
            name:goal.name,
            daysLeft:daysLeft
        };
    })

    const warnings=goals.filter(goal=>{
        const deadlineDate = new Date(goal.deadline);
        const today = new Date();
        const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
        const isComplete=Number(goal.savedAmount)>=Number(goal.targetAmount);
        return daysLeft<=30 &&daysLeft>0 && !isComplete;

    });

    const overdue=goals.filter(goal=>{
        const deadlineDate = new Date(goal.deadline);
        const today = new Date();
        const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
        const isComplete=Number(goal.savedAmount)>=Number(goal.targetAmount);
        return daysLeft<0 &&!isComplete;
    });
  return (
    <div>
        <h2>Overview</h2>
        <p><b>Total number of goals:</b> {goals.length}</p>
        <p><b>Total Amount Saved:</b> {totalSavings}</p>
        <p><b>Total Number of Goals Completed:</b> {completedGoal.length}</p>
        
        <h3>Days Left Per Goal</h3>
        <ul>
            {remainingTime.map((goal,index)=>(
                <li key={index}>
                    <b>{goal.name}:</b> {goal.daysLeft} {goal.daysLeft===1?"day":"days"} left
                </li>
            ))}
        </ul>
        <h3 style={{color:"orange"}}>Goals Approaching Deadline</h3>
        <ul>
            {warnings.length===0?(
                <li>No Warnings</li>
            ):(
                warnings.map(goal=>(
                    <li key={goal.id}>
                        <b>{goal.name}</b> -Less than 30 days left!
                    </li>
                ))
            )}
        </ul>
        <h3 style={{color:"red"}}> Overdue Goals</h3>
        <ul>
            {overdue.length===0?(
                <li>No overdue goals</li>
            ) : (
                overdue.map(goal=>(
                    <li key={goal.id}>
                        <b>{goal.name}</b> - Dealine passed without completion!
                    </li>
                ))
            )}
        </ul>

    </div>
  )
}
export default Overview;
