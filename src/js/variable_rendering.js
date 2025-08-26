import React from 'react';
import ReactDOM from 'react-dom/client';

/*for variable rendering
number/string:  directly render the value
boolean: empty
undefined/null : empty
Symbol: empty
BigInt: empty
array: the list of elements without any separator
object: not supported -uncaught Error: Objects are not valid as a React child (found: object with keys {name, id}). If you meant to render a collection of children, use an array instead
function: not supported -uncaught Error: Functions are not valid as a React child
*/
function variable_rendering(){
    var num1 = 10;
    var str1 ='i am a string';
    var bool1 = true;
    var un = undefined;
    var nul = null;
    var arr1 =[1,2,3,4,5];
    var obj1 ={name: "me", id: 2};
    var func1= function(){return 1;};
    

   
   
   
    const DIV = ReactDOM.createRoot(document.getElementById('variable_rendering'));
    DIV.render(
        <div>
            <p>1:{num1}</p>  {/*10*/}
            <p>2:{str1}</p> {/*i am a string*/}
            <p>3:{bool1}</p> {/*empty*/}
            <p>4:{un}</p> {/*empty*/}
            <p>5: {nul}</p> {/*empty*/}
            <p>6: {arr1}</p> {/*12345*/}
            <p>7: {arr1.toString()}</p> {/*1,2,3,4,5*/}
            <p>8: {arr1.join()}</p> {/*1,2,3,4,5*/}
            <p>9: {[]}</p> {/*empty*/}
            
            {/*<p>10: {obj1}</p>*/} {/*react-dom-client.development.js:7082 Uncaught Error: Objects are not valid as a React child (found: object with keys {name, id}). If you meant to render a collection of children, use an array instead.*/}
            {/*<p>11: {func1}</p>*/} {/*variable_rendering.js:39 Functions are not valid as a React child. This may happen if you return func1 instead of <func1 /> from render. Or maybe you meant to call this function rather than return it.*/}
            <p>12:</p>

            
        </div>

    );
    
}
export default variable_rendering;