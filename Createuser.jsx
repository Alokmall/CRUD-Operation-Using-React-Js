import React from 'react';
import style from './home.module.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Createuser = () => {
    let[name, setName]=useState("")
    let[company, setCompany]=useState("")
    let[salary, setSalary]=useState("")
    let navigate= useNavigate()
    let getName=(e)=>{
        
       setName(e.target.value);
    }
    let getCompany=(e)=>{
        setCompany(e.target.value)
    }
    let getSalary=(e)=>{
        setSalary(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        let payload ={
            empName:name,
            empSalary:salary,
            empCompany:company
        }
        axios.post("http://localhost:5000/employees",payload)
        .then(()=>{console.log("Data has been stored");
        navigate("/users")})
        .catch(()=>{ console.log("error");})
        

    }
    return (
        <div id={style.myForm}>
              <form >
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={getName} />
          <label htmlFor="">Company</label>
          <input type="text" value={company} onChange={getCompany} />
          <label htmlFor="">Salary</label>
          <input type="text" value={salary} onChange={getSalary} />
          <button onClick={formHandle}>Submit</button></form>
        </div>
    );
};

export default Createuser;