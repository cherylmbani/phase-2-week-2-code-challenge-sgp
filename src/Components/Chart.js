import React from 'react'

function Chart({targetAmount, savedAmount}){
    const remaining=targetAmount-savedAmount;
    const rawPercent=(savedAmount/targetAmount) *100;
    const progressPercent=rawPercent.toFixed(2);
  return (
    <div>
        <br />

        <p><b>Total Saved:</b> {savedAmount}</p>
        <p><b>Target Amount:</b> {targetAmount}</p>
        <p><b>Remaining Amount:</b> {remaining}</p>
        <div style={{background: "#eee", height:"20px", borderRadius:"10px"}}>
            <div style={{width:`${progressPercent}%`, background:"#4caf50", height:"100%", borderRadius:"10px"}}>{progressPercent}%</div>

        </div>
        <br />
    </div>
  )
}
export default Chart;
