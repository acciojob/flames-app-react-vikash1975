import React, {Component, useState} from "react";
import '../styles/App.css';

function App(){
    const [name1, setName1]=useState("");
    const [name2, setName2]=useState("");
    const [result, setResult]=useState("");

    const flamesResult=["Siblings", "Love", "Friends","Affection","Marriage","Enemy"];

    const handleCalculate=()=>{
        if(name1.trim()==="" || name2.trim()===""){
            alert("Please enter valid value");
            return;
        }

        let str1=name1.split("");
        let str2=name2.split("");

        for(let i=0; i<str1.length; i++){
            const char=str1[i];
           const indexInStr2=str2.indexOf(char);
           if(indexInStr2!==-1){
            str1.splice(i,1);
            str2.splice(indexInStr2,1);
            i--;
           }
        }

        const totalLength=str1.length+str2.length;
        const statusIndex=totalLength%6;
        setResult(flamesResult[statusIndex]);
    }

        const handleClear=()=>{
            setName1("");
            setName2("");
            setResult("");
        };


        return(
            <div id="main" style={{padding:"20px"}}>
                <input data-testid="input1"
                      name="name1"
                      value={name1}
                      onChange={(e)=>setName1(e.target.value)}
                      placeholder="Enter your first name"
                      />


                 <input data-testid="input2"
                 name="name2"
                 value={name2}
                 onChange={(e)=>setName2(e.target.value)}
                 placeholder="Enter your second name"
                 />

                 <button data-testid="calculate_relationship"
                   name="calculate_relationship"
                   onClick={handleCalculate}
                   >Calculate Relationship</button> 

                   <button data-testid="clear"
                   name="clear"
                   onClick={handleClear}
                   >Clear</button>   

                   <h3 data-testid="answer">{result}</h3> 
            </div>
        );

    }


    export default App;



