import { Avatar } from '@mui/material'
import React from 'react'
import "./post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import InputOption from './inputoption';
function Post({name , description , message , photoUrl}) {

  return (
    <div  className='post'>
        <div className='post_header'>
            <Avatar src={photoUrl}>{photoUrl}</Avatar>
            <div  className='post_info'>
                <h2>{name}</h2>
                <p>{description}</p>

            </div>

        </div>
        <div className='post_body'>
            <p>{message}</p>

        </div>

        
        <div className='post_button'>
                <InputOption Icon={ThumbUpIcon} title="Like" Color="gray" />
                <InputOption Icon={ChatIcon} title="Comment" Color="gray" />
               
                
                
                <InputOption Icon={ShareIcon} title="Share" Color="gray" />
                <InputOption Icon={SendIcon} title="share" Color="gray" />

            </div>
      
    </div>
  )
}

export default Post
