import React from 'react'
import HeroPhoto from './HeroPhoto'
// import Hero from './Hero'
// import Navbar from './Navbar'
import Excepthero from './Excepthero'

function Home(props) {
  return (
    <div id='home-div'>
        {/* <Navbar/> */}
        <Excepthero modeController={props.modeController} mode = {props.mode}/>
        <HeroPhoto/>
        {/* <Hero/> */}
    </div>
  )
}

export default Home