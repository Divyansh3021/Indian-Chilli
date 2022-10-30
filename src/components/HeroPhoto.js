import React from 'react'
import "./CSS/hero.css"

function HeroPhoto() {
  return (
    <div style={{display:"flex"}}>
        <img id='hero-photo' src={require("./Assets/hero-photo.jpg")} alt="" />
    </div>
  )
}

export default HeroPhoto