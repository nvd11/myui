import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/vdom2.css'
//it's recommended that to import css here(with in the react module)
//but not into the html file, because the webpack packaging logic
//and it can avoid the global css conflicts . 
function vDom2(){
    console.log("vdom2");
    const vDom2= ReactDOM.createRoot(document.getElementById('vdom2'));
    var myid = 'h2ID2';
    var mydata = "hello, vdom2!"
    var VDOM = (
        <h2 id={myid.toLocaleLowerCase()} className='vdom2_style'>
            {mydata}
        </h2>
    
    )
    vDom2.render(VDOM);
}

export {vDom2};