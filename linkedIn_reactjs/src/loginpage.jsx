import React, { useState } from 'react'
import "./loginpage.css"
import { auth } from './firebase'
import {  signInWithEmailAndPassword  , createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {login} from "./redux/linkedinSlice"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Loginpage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [ name , setName ] = useState("")
  const [email , setEmail ] = useState("")
  const [password , setPassword] = useState("")
  const [proPic , setProPic] = useState("")

  const loginTo= (e) =>{
    e.preventDefault()

   signInWithEmailAndPassword(auth , email , password).then((userD) =>{

    dispatch(login({
      id:userD.user.uid ,
      name : userD.user.displayName ,
      email : userD.user.email  ,
      photoUrl:   userD.user.photoURL,

    }))

    setTimeout(()=>{
      navigate("/mainsection")

    } , 1000)
   })

  }
  const register =() =>{
    if(!name ){
      return alert ("please netre your full name")
    }
    createUserWithEmailAndPassword(auth , email , password ).then((userdetails) =>{
      updateProfile(auth.currentUser ,{
        displayName : name , 
        photoURL :proPic , 
      }
        )

        dispatch(login({
          id : userdetails.user.uid , 
          name : name , 
          email : userdetails.user.email ,
          photUrl : proPic , 
        }))
 

  })
    .catch((error) =>{
      console.log(error.code)
    })

  }
  return (
    <div  className='login' >
        <img src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png" alt="" />
        <form >
          <input value ={name}  onChange={e => setName(e.target.value)} placeholder='Full name required (if registering) ' type="text" />
          <input value ={proPic} onChange={e => setProPic(e.target.value)} placeholder='Profile pic URL (optional)' type="text" />
          <input value={email}  onChange={ e => setEmail(e.target.value)} placeholder='email' type="text" />
          <input value={password}  onChange={e => setPassword(e.target.value)} placeholder='password'  type="password" />
          <button onClick={loginTo} className='login_buton'>Sign In</button>
        </form>
        <p >Not a membe? <Link to="/signup"> <span className='login_register'>register Now</span></Link> </p>
      
    </div>
  )
}

export default Loginpage
