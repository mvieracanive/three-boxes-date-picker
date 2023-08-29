import React from "react";
import reactDom from "react-dom";

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.id = 'root';
  
    return element;
  }
  
  document.body.appendChild(component());
  
  const App = () =>{
      return (
          <h1>
              Welcome to React App thats build using Webpack and Babel separately
          </h1>
      )
  }
  
  reactDom.render(<App />, document.getElementById("root"))
