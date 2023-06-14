import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./header.css"
import Headeroption from './headeroption';

import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';

import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/linkedinSlice';
import { signOut } from "firebase/auth";
import { auth } from "./firebase"
import { useNavigate } from 'react-router-dom';



function Header(){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const myUser = useSelector(state => state.linreducer.user)

  

  const logoutApp =() =>{
    signOut(auth).then(() => {
      console.log("signout successfully")
      dispatch(logout())

      setTimeout(() =>{
        navigate("/")

      } , 1000)
    
    
    }).catch((error) => {
      // An error happened.
    });
   

  }
  return (
    <div className='header'>
        <div className='header_left'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAaVBMVEX///8AZsgAWsW8yekAZMcAX8YAYccAUsIZY8dLes7i6fbF0+3N2vAAUMJXhdIAV8Ty9fvs8fqQrN8obMrW4fOpveVhjtRwl9eAotstcszd5PSLpNySqd6Gpt36+/5slNcASsGetuJIfs9MuO+SAAACUElEQVRoge2a6XKqMBSATTgJSmIDhELVe7Ht+z9kRWRTOtMsJu3M+X6Jgh/Zl5PNBkEQBEEQBEGQv0VWSZH8FCGrzJO3SGpNgNMfwzgQXSeFszkvteIAQEy43M+VLnM3tdTUTDt7Aaqli/o1tTVf7emrg3rvYO7YW8tl6qgmJLXM9ly7ZHgPaLsKV1JnNSG0tFEXHpLdJdymnSfKg5oQlVi4a+7FzWsLt5cs7zLdXJ0RT25iPrBUD304p4wyczdUxm55V9xAGyHFm3n3zs27F7FMIqj+9c2Lggljd7LsWeiQc8XWUE7NG9nSPWsppWGZO7tnf1AZ9jnu7qnQjobd/J9Od8zynup5FryeE2DHXn0wHWLc3Rd5I47yDYxHNw/uSwellGLmA4wXtyXPdgPvWM8TD3VtP3A1qNtF19aBpYfz6d+p1vu1yuDshm2b39hd5KrqP7eXuxj8z9rrI211XhliPbjHHzp3OsxFhKLNfCIqdw89z/Pc73ernry+lz/NnXw8PLiDQO6VFU/xHsi9RsPjuSsW0N0W2SLvDxDKnZefGg7N7JvlCP9Ed6EpdHs7dJqGi++mPL7dw3gOZMz3UG6RPjpCuU9jg2JNaPfL6J6mk8HcgG50oxvd6Eb3L3QLY/d5/VGLfcXlfipsK9lTXdeCye1Kfk7ul+GWj8Vc0WI/9W4fGdjA9Wt+u5ivucdblm9tsY8cc/88ZtwgarwkZpwoZnwsZlwwajw0Zhw4avw7atw/6nmHqOc8NuP5Fhb+fEtPrHM9CIIgCIIgCIKE4gso3C710jS5/gAAAABJRU5ErkJggg==" alt="" />
            <div className='header_search'>
                <SearchIcon/>
                <input placeholder='Search' type="text" />
            </div>

        </div>
        <div className='header_right' >
            <Headeroption Icon={HomeIcon} title="Home" />
            <Headeroption Icon={SupervisorAccountIcon} title="My Network" />
            <Headeroption Icon={BusinessCenterIcon} title="Business" />
            <Headeroption Icon={ChatIcon} title="Chat" />
            <Headeroption Icon={NotificationsIcon} title="Notification" />
            <Headeroption onClick={logoutApp} avator={myUser?.photoUrl} title ={myUser?.name} />
            

        </div>
      
    </div>
  )
}

export default Header;
