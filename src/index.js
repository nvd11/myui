import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {vDom2} from './js/vdom2.js';
import {vdom3} from './js/vdom3.js';






//after version 18, react use ReactDOM.createRoot instead of ReactDOM.render().
//lets you display react elements into a DOM obj defined in html files

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>11111</div> 
    <div><b>this will work</b></div>
    
  </>
); // e



const test1 = ReactDOM.createRoot(document.getElementById('test1'));
const h2Id = "h2ID1";
const h2Data = "hello, jsx！"
var vdomTest1= (
    <h2 id ={h2Id.toLocaleLowerCase()}>
        <span>{h2Data}</span>
    </h2>
)

test1.render(vdomTest1);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();//

console.log("hello")  
                                                                                                                                                                                                                                  
vDom2();
vdom3();
