import React, { useState } from 'react';

function GoalList({ goals, onUpdateGoal, onDeleteGoal}) {
  const [editingGoalId, setEditingGoalId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: ""
  });

  function startEditing(goal) {
    setEditingGoalId(goal.id);
    setEditFormData({
      name: goal.name,
      targetAmount: goal.targetAmount,
      category: goal.category,
      deadline: goal.deadline
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  }

  function handleSave(goalId) {
    fetch(`http://localhost:3001/goals/${goalId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editFormData)
    })
      .then(r => r.json())
      .then(updatedGoal => {
        onUpdateGoal(updatedGoal);
        setEditingGoalId(null); // exit edit mode
      });
  }

  const goalsArray = goals.map((goal) => {
    const isEditing = goal.id === editingGoalId;

    function handleDelete(goalId){
        fetch(`http://localhost:3001/goals/${goalId}`,{
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(()=>{
            onDeleteGoal(goalId);
        })
    }

    return (
      <div key={goal.id} style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={editFormData.name}
              onChange={handleChange}
              placeholder="Name"
            /><br />
            <input
              type="text"
              name="targetAmount"
              value={editFormData.targetAmount}
              onChange={handleChange}
              placeholder="Target Amount"
            /><br />
            <input
              type="text"
              name="category"
              value={editFormData.category}
              onChange={handleChange}
              placeholder="Category"
            /><br />
            <input
              type="text"
              name="deadline"
              value={editFormData.deadline}
              onChange={handleChange}
              placeholder="Deadline"
            /><br />
            <button onClick={() => handleSave(goal.id)}>Save</button>
          </>
        ) : (
          <>
            <h2>{goal.name}</h2>
            <p><b>Target Amount:</b> {goal.targetAmount}</p>
            <p><b>Category:</b> {goal.category}</p>
            <p><b>Deadline:</b> {goal.deadline}</p>
            <p><b>Saved Amount:</b> {goal.savedAmount}</p>

            <button onClick={() => startEditing(goal)}>Edit</button>
            <button onClick={()=>handleDelete(goal.id)}>Delete</button>
          </>
        )}
      </div>
    );
  });

  return <div>{goalsArray}</div>;
}

export default GoalList;
