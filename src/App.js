import React,{useState} from "react";
import './App.css';

function App() {
  const [result,setResult]=useState("")
  function clickHandler(e){
    setResult(result.concat(e.target.name));
  }
  const clickCalculate=()=>{
    try{
    setResult(eval(result).toString())
    }
    catch{
      setResult("ERROR")
    }
  }
  const clickDelete=()=>{
    setResult(result.slice(0,-1))
  }
  const clickClear=()=>{
    setResult("")
  }
  return (
    <div className="App">
     <div className="calculator">
       <div className="display">
         <input type="text" value={result}/>
       </div>

       <div className="operators">
         <button name="/" onClick={clickHandler}>/</button>
         <button name="*" onClick={clickHandler}>*</button>
         <button name="+" onClick={clickHandler}>+</button>
         <button name="-" onClick={clickHandler}>-</button>

         <button onClick={clickDelete}>DEL</button>
         <button onClick={clickClear}>C</button>
       </div>
       
       <div className="digits">
        <button name="7" onClick={clickHandler}>7</button>
        <button name="8" onClick={clickHandler}>8</button>
        <button name="9" onClick={clickHandler}>9</button>
        <button name="4" onClick={clickHandler}>4</button>
        <button name="5" onClick={clickHandler}>5</button>
        <button name="6" onClick={clickHandler}>6</button>
        <button name="1" onClick={clickHandler}>1</button>
        <button name="2" onClick={clickHandler}>2</button>
        <button name="3" onClick={clickHandler}>3</button>
        <button name="." onClick={clickHandler}>.</button>
        <button name="0" onClick={clickHandler}>0</button>
        <button onClick={clickCalculate}>=</button>
       </div>
     </div>
    </div>
  );
}

export default App;
