import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lifecycle from './State/State';

function Main (){
  return <div>function</div>
}
class Second extends React.Component{
  render(){
    return <div>Second class component</div>
  }
}

class First extends React.Component{
  render(){
    return <div>First class component<Second/></div>
  }
}

class Main extends React.Component{
  render(){
    return <div>class component<First/></div>
  }
}

function First(props){
  return <div>First{props.name}
  <button onClick={()=>props.get("react")}>click</button>
  <Second/></div>
}

function Second(){
  return <div>Second</div>
}

function Main(props){

  const getData=(data)=>{
     console.log(data);
  }
  return <div>class{props.name}<First name={props.name} get={getData}/></div>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

