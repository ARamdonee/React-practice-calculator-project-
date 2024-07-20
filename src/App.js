import { useReducer } from "react";
import "./style.css"

const ACTIONS = {
  
}
function reducer(state,action){

}

function App(){
  const[{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    //rap everything up 
    <div className="calculator-grid">
    
      <div className="output">
        <div className="previous-operand">{currentOperand} {operation}</div>
        <div className="current-operand">{previousOperand}</div>
    
      </div>

      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>




    </div>
  )

}

export default App;
