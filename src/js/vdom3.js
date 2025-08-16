import React from 'react';
import ReactDOM from 'react-dom/client';
//you need to use the double curly braceeee {{"key":"value"}} pattern when using the inline styles

function vdom3(){
  const vdom3 = ReactDOM.createRoot(document.getElementById('vdom3'));
  var myId = "h2ID3";
  var myData = "hello vdom3!";
  
  var VDOM = (
     <h2 id={myId.toLocaleLowerCase()}>
        <span style={{"color":"green", "fontSize":"20px"}}>{myData}</span>
     </h2>
  )
  vdom3.render(VDOM);

  
}

export {vdom3};