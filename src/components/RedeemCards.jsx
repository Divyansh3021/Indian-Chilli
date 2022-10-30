import React from 'react'
import scheme from"./scheme.json"
import "./CSS/redeem.css"

function RedeemCards() {
  return (
    <div className='redeem-box'>
        {
            scheme && scheme.map( times => {
                return(
                    <div className="redeem-card" key={times.visit}>
                        <h2>Visit: {times.visit}</h2>
                        {times.dishes && times.dishes.map(dish => {
                            return(
                                <div className="redeem-dish" style={{background: "url("+dish.url+")" , backgroundSize: "cover", }}>
                                    <h2 className='dish-name'>{dish.dish}</h2>
                                    <div className="redeem">Redeem</div>
                                </div>
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