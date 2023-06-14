import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import "./signup.css"

function Signup() {
    const navigate= useNavigate()
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [proPic , setProPic] = useState()
    const [password , setPassword] = useState("")

    const SignTo =() =>{
        if(!name ){
            alert("please enter your full name")
        }
        createUserWithEmailAndPassword(auth , email , password).then((user) =>{
            updateProfile(auth.currenUser , {
                displayName: name , 
                photoURL: proPic,

            })

            setTimeout(() =>{
                navigate("/loginpage")

            })

        }).catch((error) =>{
            console.log(error.code)
        })

    }
    
  return (
    <div className='signup'>
         <h1>Join LinkedIn</h1>
        <form >
          <input value ={name}  onChange={e => setName(e.target.value)} placeholder='Full name required (if registering) ' type="text" />
          <input value ={proPic} onChange={e => setProPic(e.target.value)} placeholder='Profile pic URL (optional)' type="text" />
          <input value={email}  onChange={ e => setEmail(e.target.value)} placeholder='email' type="text" />
          <input value={password}  onChange={e => setPassword(e.target.value)} placeholder='password'  type="password" />
          <p>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
          <button onClick={SignTo} className='login_buton'>Agree & Join</button>
        </form>
        
        <p >Already on LinkedIn? <Link to="/"> <span className='login_register'>Sign in</span> </Link></p>
      
    </div>
  )
}

export default Signup
