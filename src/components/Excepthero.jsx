import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import OrderCard from './OrderCard'
import RedeemCards from './RedeemCards'

function Excepthero(props) {


  return (
    <div id='except-hero'>
        <Navbar />
        <Hero/>
        <OrderCard modeController={props.modeController} mode={props.mode}/>
        <RedeemCards mode={props.mode}/>
    </div>
  )
}

export default Excepthero