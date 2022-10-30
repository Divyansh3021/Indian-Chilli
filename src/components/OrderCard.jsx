import React from 'react'
import "./CSS/oder.css"

function OrderCard(props) {
  // function show_redeem(){
    // var element = document.getElementById("redeem-card");
    // console.log(element );
    // element.classList.add("dflex");
  // }
  return (
    <div id='order-card'>
        <h2 id='order'>Order</h2>
        
        <form action="http://localhost:3001/" method="get" id='order-form'>
            <input type="date" name="date" id="datetime" />
            <input type="text" name="ordered-dish" id="ordered-dish" />
            <button type="submit" onClick={props.modeController}>Add Visit</button>
        </form>
    </div>
  )
}

export default OrderCard