import React from 'react'
import scheme from"./scheme.json"
import "./CSS/redeem.css"

function RedeemCards(props) {
  return (
    <div className='redeem-box'>
        {
            scheme && scheme.map( times => {
                return(
                    <div className="redeem-card" style={{display: props.mode}} key={times.visit}>
                        {times.dishes && times.dishes.map(dish => {
                            return(
                                <h2>{dish.dish}</h2>
                            )
                        }
                        )}
                    </div>
                )
            }
            )
        }
    </div>
  )
}

export default RedeemCards