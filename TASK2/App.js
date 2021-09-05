import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [people,setpeople] = useState();
  const getpeople = async() => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setpeople(data.data);
  };
  return (
    <>
      <header className="ekdumtop">
        <h1><mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REACT APP</mark></h1>
        <marquee behavior="scroll" direction="right">WELCOME TO TASK 2</marquee>

        <div className="button" onClick={getpeople}>Fetch Data</div>
      </header>
      <div className="container">
        {people?.map((c1,index) => {
          return(
            <div className=" row" key={index}>
              <img src={c1.avatar} className="image" aria-multiselectable/>
              <div className="content">
                <h2 className="heading">
                {c1.first_name}{c1.last_name}
                </h2>
                <h5 className="mail">{c1.email}</h5>
              </div>

            </div>
          );
        })}  
        
        
      </div>  
      </>
        
      
  );
}

export default App;