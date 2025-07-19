import React from 'react'
import {Routes, Route} from "react-router-dom";
import NavBar from './NavBar';
import Goals from '../pages/Goals';


const App = () => {
  
  return (
    <div>
      <header>
        <h1>Smart Goal Planner</h1>
      </header>
      <NavBar />
      <main>
        <Routes>
          <Route path="/goals" element={<Goals />} />
          
      
        </Routes>
        
  
      </main>

    </div>
  )
}

export default App