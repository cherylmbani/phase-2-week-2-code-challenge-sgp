import React,{useState} from 'react'

function GoalForm ({onAddGoal}){
    const [formData, setFormData]=useState({
        name:"",
        targetAmount:"",
        category:"",
        deadline:"",
        savedAmount:""
    })
    function handleFormChange(e){
        const {name, value}=e.target;
        setFormData({
            ...formData, [name]:value,
        });
    }
    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:3001/goals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData),
        })
        .then(r=>r.json())
        .then(newGoal=>{
            onAddGoal(newGoal);
            setFormData({
                name:"",
                targetAmount:"",
                category:"",
                deadline:"",
                savedAmount:""
            });
        })
    }
    

        
  return (
    <div>
        <h2> Add Goal</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleFormChange} /><br />
            <label htmlFor="amount">Target Amount:</label>
            <input type="text" name="targetAmount" value={formData.targetAmount} onChange={handleFormChange} /><br />
            <label htmlFor="category">Category:</label>
            <input type="text" name="category" value={formData.category} onChange={handleFormChange} /><br />
            <label htmlFor="deadline">Deadline</label>
            <input type="text" name="deadline" value={formData.deadline} onChange={handleFormChange} /><br />
            <label htmlFor="savedAmount">Saved Amount:</label>
            <input type="text" name="savedAmount" value={formData.savedAmount} onChange={handleFormChange} /><br />
            <button type="submit">Submit</button>

        </form>
        
    </div>
  )
}

export default GoalForm