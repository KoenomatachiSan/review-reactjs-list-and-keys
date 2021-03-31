import React from 'react';
import Component from './Component';


const numbers = [1, 2, 3, 4, 5];
function App() {
  return (
    <div className="App">
        <p>
         Hello World!
         My name is KoenomatachiSan, and it's my component!
        </p>
        <Component numbers={numbers}/>
    </div>
  );
}

// Props are read-only

export default App;
