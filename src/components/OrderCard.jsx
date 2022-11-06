import React from 'react'
import "./CSS/oder.css"
import {useState, useEffect} from 'react'
import scheme from "./scheme.json"
import storage from "./storage.json"
// import "browserify-fs"
// import {writeFile} from 'node:fs'

function OrderCard(props) {
  
    const [data, setdata] = useState({
      "num":0
  });

  var visited = 0;

  function show_redeem(e){
    e.preventDefault();
    var date = document.getElementById("datetime").value;
    var dish = document.getElementById("ordered-dish").value;

    var json_data = [{
      "date": date,
      "dish": dish
    }]

    console.log("The Data is: ", json_data);
    visited++;
    console.log("The length of data is: ", visited)



    let url = "http://localhost:5000/data?date="+date+"&ordered-dish="+dish;
//     let data = fetch((url),{
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//       },
//       mode: 'cors',
//       referrerPolicy: "origin-when-cross-origin",
//       // body: JSON.stringify({ to: email, new: newN })
//     });

    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.open("GET", url, true);
    // xmlhttp.send();
    // const fileSystem = require("browserify-fs")

    // const fs = require('');
    // fs.writeFile
    // fs.writeFile()
    // const client = {
    // "Date": date,
    // "Dish": dish,
    // }

    // var obj = JSON.parse(storage);
    // const data = JSON.stringify(client)

    // var new_json = JSON.stringify(obj.push(client));

  //   const jsonString = JSON.stringify(client);
  //   fs.writeFile('storage.json', jsonString, err => {
  //     if (err) {
  //         console.log('Error writing file', err)
  //     } else {
  //         console.log('Successfully wrote file')
  //     }
  // })
  //   console.log("data is", jsonString)


    let num = visited;
    let arr = document.getElementsByClassName("redeem-card")
    let count = 0;
    for (let i = 0; i < num+1; i++) {
      // let times = scheme[i];
      var element = arr[i];
      if(count==num){
        console.log("in if")
        var elements = document.getElementsByClassName('redeem-dish');
        for (let j = 0; j < elements.length; j++) {
          const box = elements[j];
          // box.style.filter = "grayscale(100%)";
        }
        element.style.display = "flex";
        var childNodes = element.children;

        for (let index = 0; index < childNodes.length; index++) {
          const element = childNodes[index];
          // element.style.filter = "grayscale(100%)";
          
        }
        console.log("eheheh", element.children);
        // element.style.filter = "grayscale(1)";
        count++;
      }
      else{
      element.style.display = "flex";
      console.log("object is: ",element);
      count++;
      }
    //   return(
    //     <div className="redeem-card" key={times.visit}>
    //         <h2>Visit: {times.visit}</h2>
    //         {times.dishes && times.dishes.map(dish => {
    //             return(
    //                 <div className="redeem-dish" key={dish.url} style={{background: "url("+dish.url+")" , backgroundSize: "cover", }}>
    //                     <h2 className='dish-name'>{dish.dish}</h2>
    //                     <div className="redeem">Redeem</div>
    //                 </div>
    //             )
    //         }
    //         )}
    //     </div>
    // )
      
    }
    // fetch("http:localhost:5000/data").then((res) =>
    //     res.json().then((data) => {
    //         // Setting a data from api
    //         setdata({
    //             num: data.num,
    //         });
    //     })
    // );
    // console.log("number is: ",data.num);
    // e.preventDefault();
    // var element = document.getElementById("redeem-card");
    // console.log(element );
    // element.classList.add("dflex");
    // e.preventDefault();
    
    // let url = "http://localhost:5000/getdata"
    // let data = await fetch(url);
    // console.log("data is", data)
    


  }

// useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    // fetch("/data").then((res) =>
    //     res.json().then((data) => {
    //         // Setting a data from api
    //         setdata({
    //             num: data.num,
    //         });
    //     })
    // );
    // console.log("number is: ",data.num);
//     let url = "http://localhost:5000/getdata"
//     let data = fetch((url),{
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//       },
//       mode: 'cors',
//       referrerPolicy: "origin-when-cross-origin",
//       // body: JSON.stringify({ to: email, new: newN })
//     });
//     console.log("data is", data)
// }, []);

// const getData = setTimeout(() => {})


// function printCards(){
//   let num = 5;
//   let count = 0;
  // <div className="redeem-card" key={times.visit}>
  // <h2>Visit: {times.visit}</h2>

  // <div className="redeem-dish" key={dish.url} style={{background: "url("+dish.url+")" , backgroundSize: "cover", }}>
  //                       <h2 className='dish-name'>{dish.dish}</h2>
  //                       <div className="redeem">Redeem</div>
  //                   </div>
  // </div>




  // scheme && scheme.map( times => {
  //   count++;
  //   if(count<num){
  //   return(
  //       <div className="redeem-card" key={times.visit}>
  //           <h2>Visit: {times.visit}</h2>
  //           {for (count; index < num ; count++){

  //           }
  //           times.dishes && times.dishes.map(dish => {
  //               return(
  //                   <div className="redeem-dish" key={dish.url} style={{background: "url("+dish.url+")" , backgroundSize: "cover", }}>
  //                       <h2 className='dish-name'>{dish.dish}</h2>
  //                       <div className="redeem">Redeem</div>
  //                   </div>
  //               )
  //           }
  //           )}
  //       </div>
    // )
    //       }

    // else{
    //   return(
    //     <div className="empty-div"></div>
    //   )
    // }


// }


  return (
    <div id='order-card'>
        <h2 id='order'>Order</h2>
        
        <form action="http://localhost:5000/data" method="get" id='order-form'>
            <input type="date" name="date" id="datetime" />
            <input type="text" name="ordered-dish" id="ordered-dish" />
            <button type='submit' onClick={show_redeem} >Add Visit</button>
        </form>
    </div>
  )
}

export default OrderCard