import React, {useState} from 'react'

function Deposits ({goals, onUpdateGoal}){
    const [selectedGoal, setSelectedGoal]= useState("");
    const [depositAmount, setDepositAmount] = useState(0)

    function handleSelectedGoal(e){
        setSelectedGoal(e.target.value);
    }

    function handleDeposit(e){
        setDepositAmount(e.target.value);

    }

    function handleSubmit(e){
        e.preventDefault();
        const goalToUpdate=goals.find(goal=>goal.id===selectedGoal);
        if(!goalToUpdate) return;
        const updatedAmount=Number(goalToUpdate.savedAmount) + Number(depositAmount);

        fetch(`http://localhost:3001/goals/${selectedGoal}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({savedAmount: updatedAmount})
        })
        .then(r=>r.json())
        .then(updatedGoal=>{
            onUpdateGoal(updatedGoal);
            setDepositAmount(0);
            setSelectedGoal("")
        })

    }
  return (
    <div>
        <h2 style={{color:"#2a9df4"}}>Increase Your Savings with Regular Deposits</h2>
        <form onSubmit={handleSubmit} style={{marginTop:"20px"}}>
            <label htmlFor="goal">Choose a Goal:</label>
            <select id="goal" name="goal" onChange={handleSelectedGoal} value={selectedGoal}>
                {goals.map((goal)=>{
                    return (<option key={goal.id} value={goal.id}>
                        {goal.name}
                    </option>)
                })}
            </select>
            <label htmlFor="deposit">Deposit Amount:</label>
            <input type="text" name="deposit" onChange={handleDeposit} value={depositAmount}/>
            <button type="submit">Submit</button>
        </form>
        
            

    </div>
  )
}
export default Deposits;
