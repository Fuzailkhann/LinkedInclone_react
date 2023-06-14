import React from 'react'

import Header from '../header' 
import { Outlet } from "react-router-dom"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase'
import { login } from  "../redux/linkedinSlice"



function Mainheader() {
  const dispatch = useDispatch()

  useEffect(() =>{
    auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email ,
          name : userAuth.displayName ,
          uid : userAuth.uid , 
          photoUrl : userAuth.photoURL , 


        }))
      }else{
        dispatch(logout())
      }
    })
  } , [])


  return (
    <div>
        <Header/>
        <Outlet></Outlet>
      
    </div>
  )
}

export default Mainheader
