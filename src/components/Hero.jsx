import React from 'react'
import "./CSS/hero.css"
import Dishes from "./Dishes.json"

function Hero() {

    // function expand_height(e){
    //     console.log("heheheh");
        // e.preventDefault();
        // console.log(e);
        // console.log(e.target.id);
        // const element = document.getElementById(e.target.id);
        // console.log(element);
        // var rootNode = element.getRootNode;
        // console.log(rootNode);
        // element.style.height = "50vh";
        // e.classList.add('expanded-dish-env');
    // }

  return (
    <div id='hero'>
        <div id="tagline">
            <h1 id='tagline-1'>
                Order your
            </h1>
            <h2 id='tagline-2'>
                favorite food
            </h2>
        </div>

        <div id='tagline-sen'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laudantium autem velit, expedita id placeat labore eaque explicabo animi reprehenderit consequatur quam repudiandae deleniti aliquam.
        </div>

        <div id="dishes">
            <h2 id='chef-choice'>Today's Menu</h2>

            <div id="dish-imgs">
                {
                    Dishes && Dishes.map( dish => {
                        // var url = dish.image_url;
                        return(
                        <div className="dish-env" key={dish.id} id={dish.id} >
                            <img src={require("./Assets/cuisine-"+dish.id+".png")}  alt="" className="dish" />
                            {/* <br /> */}
                            <div>
                                <h2>{dish.name}</h2>
                            </div>
                            {/* <br /> */}
                            <h3>Rs. {dish.price}/-</h3>
                        </div>
                        )
                    }
                    )
                }
                {/* <div className="dish-env"><img src={require("./Assets/cuisine-1.png")} alt="" className="dish" /></div> */}
                {/* <div className="dish-env"><img src={require("./Assets/cuisine-3.png")} alt="" className="dish" /></div>
                <div className="dish-env"><img src={require("./Assets/cuisine-4.png")} alt="" className="dish" /></div> */}
            </div>
        </div>
    </div>
  )
}

export default Hero