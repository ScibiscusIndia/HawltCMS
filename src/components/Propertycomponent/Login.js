import React from 'react'
import { Maintab } from '../Maintab';
import {useState} from 'react';
import { Dashboard } from './Dashboard';
import { useNavigate, Redirect,Route  } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import './prop-style.css'

export const Login = () => {
    const [username, setUsername] = useState('');
    const [ipwd, setIpwd] = useState('');
    const [status, setStatus] = useState(false);
    const urnm = "raj"
    const pwd = "raj2345"
    
    function handleSubmit(){
        if(username == urnm && ipwd == pwd){
            // alert("right username")
            setStatus(true)
        }
        else{
            alert("wrong ids")
        }
    }

  return (
    <div className='container'>
        {status ? <Dashboard/> 
        :
        <>
        <div className="form-section" >
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">User name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="user name" onChange={(el)=>{setUsername(el.target.value)}} />
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="password" onChange={(el)=>{setIpwd(el.target.value)}} />
        </div>
        <button type="button" class="btn btn-dark" onClick={handleSubmit}>Login</button>
        </div>
        </> }
        {/* <Maintab/> */}
    </div>
  )
}
