import React from "react"

import './Column.scss'
import Card from "../Card/Card"

function Column() {
    return (
        <div className="column">
        <header>Brainstrom</header>
        <ul className="card-list">
           <Card />



          <li className="card-item">Add what you'd like to work on below</li> 
          <li className="card-item">Add what you'd like to work on below</li>  
          <li className="card-item">Add what you'd like to work on below</li>  
          <li className="card-item">Add what you'd like to work on below</li>   
           
          
        </ul> 
        <footer>Add another card</footer>
        </div>
    )
}

export default Column