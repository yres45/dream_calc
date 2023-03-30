
import './App.css';
import logo from './DC.PNG'; // with import
import React, { useState } from 'react';


function App() {
  const [result, setResult] = useState('');

  function handleClick(e) {

    if ((e.target.name === '%' && !result) || (e.target.name === '/' && !result) || (e.target.name === '*' && !result)) {
      // Do nothing if the first character is %
      return;
    }
    else if (e.target.name === '.' && !result) {
      // If the first character is ., prepend a 0
      setResult('0.');
      return;
    }
    
    const lastChar = result.charAt(result.length - 1);
    const isOperator = e.target.name.match(/[-+/*%.]/);
  
    if (isOperator && lastChar && lastChar.match(/[-+/*%.]/)) {
      // Do nothing if the last character is an operator
      return;
    }
    setResult(result.concat(e.target.name));
  }

  function handlePercentage() {
    try {
      setResult((eval(result) / 100).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  function handleClear() {
    setResult('');
  }

  function handleCalculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  function handleBackspace() {
    setResult(result.slice(0, -1));
  }


  return (
    <div className="container">
      <div class="calculator">
        <form>
          <div><img src={logo} class="logo" alt='logo calculator' /></div>
          <div class="display">
            <input type="text" value={result} />
          </div>

          <div >
            <input id="buttonAC-color" name="AC" type="button"  value="AC" onClick={handleClear} />
            <input id="button-color" name="%" type="button" value="%" onClick={handlePercentage} />
            <input id="button-color" name="clear-arrow" type="button"  value="&#8592;"  onClick={handleBackspace} />
            <input id="button-color" name="*" type="button"  value="*" onClick={handleClick} />
          </div>

          <div>
            <input id="button-color" name="7" type="button"  value="7" onClick={handleClick} />
            <input id="button-color" name="8" type="button"  value="8" onClick={handleClick} />
            <input id="button-color" name="9" type="button"  value="9" onClick={handleClick} />                      
            <input id="button-color" name="/" type="button"  value="&#247;" onClick={handleClick} />           
          </div>

          <div>
            <input id="button-color" name="4" type="button"  value="4" onClick={handleClick} />
            <input id="button-color" name="5" type="button"  value="5" onClick={handleClick} />
            <input id="button-color" name="6" type="button"  value="6" onClick={handleClick} />                      
            <input id="button-color" name="-" type="button"  value="&#8722;" onClick={handleClick} />           
          </div>

          <div>
            <input id="button-color" name="1" type="button"  value="1" onClick={handleClick} />
            <input id="button-color" name="2" type="button"  value="2" onClick={handleClick} />
            <input id="button-color" name="3" type="button"  value="3" onClick={handleClick} />                      
            <input id="button-color" name="+" type="button"  value="&#43;" onClick={handleClick} />           
          </div>
        
          <div>
            <input id="button-color" name="00" type="button"  value="00" onClick={handleClick} />
            <input id="button-color" name="0" type="button"  value="0" onClick={handleClick} />
            <input id="button-color" name="." type="button"  value="." onClick={handleClick} />                      
            <input id="button-color" name="=" type="button"  value="=" onClick={handleCalculate} />           
          </div>         
                



        </form>

      </div>
    </div>

  );
}

export default App;
