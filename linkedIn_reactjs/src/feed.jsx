import React, { useEffect } from 'react'
import "./feed.css"
import ImageIcon from '@mui/icons-material/Image';


import CreateIcon from '@mui/icons-material/Create';
import SubscriptionIcon from "@mui/icons-material/Subscriptions"
import EventNoteIcon from "@mui/icons-material/EventNote"



import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './inputoption';
import { useState } from 'react';
import Post from './post';
import { db } from './firebase';

import { collection, onSnapshot , addDoc , serverTimestamp , orderBy ,query} from "firebase/firestore";
import { useSelector } from 'react-redux';

// import { useStepContext } from '@mui/material';
function Feed() {
    const[postadd , setPostadd] = useState([])
    const [input , setInput] = useState("")

    const myUser = useSelector(state => state.linreducer.user)

 

    useEffect(() => {
        const q = query( collection(db, "postadd"),orderBy("timestamp", "desc"))
        
        const unsubscribe =  onSnapshot(q, (snapshot) => {
          setPostadd(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
              timestamp: serverTimestamp(), 
            }))
          );
        });
      
        return () => unsubscribe();
      }, []);



    const sendPost = async (e) => {
        e.preventDefault();
      
        try {
          await addDoc(collection(db, "postadd"), {
            name: myUser.name,
            description: myUser.email , 
            message: input,
            photoUrl: myUser.photoUrl ,
            timestamp: serverTimestamp(), 
          });
          
        } catch (error) {
          // Handle any errors that occur during the document addition
          console.error("Error adding document: ", error);
        }

        setInput("")
    
       
      };
  return (
    <div className='feed'>
        <div className='feed_inputContainer' >
            <div className='feed_input'>
                <CreateIcon/>
                <form >
                    <input placeholder='post' value = {input} onChange={(e) => setInput(e.target.value)}  type="text" />
                    <button onClick={sendPost} type='submit' >Send</button>
                </form>
               

            </div>
            <div className='feed_inputOption'>
                <InputOption Icon={ImageIcon} title="photo" Color="#70B5F9"/>
                <InputOption Icon={SubscriptionIcon} title="video" Color="#7FC15E"/>
                <InputOption Icon={EventNoteIcon} title="event" Color="#C0CBCD"/>
                <InputOption Icon={ CalendarViewDayIcon} title="write article" Color="#7fc15e"/>
                


            </div>

        </div>
        { postadd.map(({id , data:{name , description , message , photoUrl}}) =>(
                <Post
                key={id}
                name={name}
                description ={description}
                message ={message}
                photoUrl ={photoUrl}/>
        )) }  
      
      
    </div>
  )
}

export default Feed
