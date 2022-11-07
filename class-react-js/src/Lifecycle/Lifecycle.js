import {useState,useEffect} from 'react'

function Lifecycle() {
    const[name,setName]=useState("Nagarajan");
    const[age,setAge]=useState(23);
    const[native,setFaviorte]=useState("Cricket");

    useEffect(()=>{
        console.log("component will unmount");
    },{name,age})
  return (
    <div>
      {name}{age}{native}
      <button onClick={()=>setName("Mani")}>updateName</button>
      <button onClick={()=>setAge("22")}>updateAge</button>
      <button onClick={()=>setFaviorte("kabaddi")}>updateFavirate</button>
    </div>
  )
  }

export default Lifecycle


// import React, { Component } from 'react'
  
//   export default class Lifecycle extends Component {
//     render() {
//        const[name,setName]=useState("Nagarajan");
//        const[age,setAge]=useState(23);
//        const[native,setFaviorte]=useState("Cricket");

//        useEffect(()=>{
//         console.log("component will unmount");
//       },{name,age})
//       return (
//         <div>
//             {name}{age}{native}
//             <button onClick={()=>setName("Mani")}>updateName</button>
//             <button onClick={()=>setAge("22")}>updateAge</button>
//             <button onClick={()=>setFaviorte("kabaddi")}>updateFavirate</button></div>
//       )
//     }
//   }