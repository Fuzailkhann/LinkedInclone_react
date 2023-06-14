import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./widgets.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = ( heading , subtitle) =>(
        <div className='widgets_article' >
            <div className='article_left'>
                <FiberManualRecordIcon/>

            </div>
            <div className='article_right' >
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>

    )
    
  return (
    <div className='widgets' >
        <div className='widgets_headers'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>

        </div>
        {  newsArticle("fuzail khan maked linkedIn clone" , "using reactjs") }
        { newsArticle( " corona virus : india updates " , "Top news - 887 readers")}
        { newsArticle( " tesla hits new high " , "cars and auto- 497 readers")}
        {newsArticle("Bitcoin breaks $22k" , "crypto - 8000 readers")}
        {newsArticle("is redux is too good" , "code- 200 readers")}
        {newsArticle("tailwind css is using in industryu" , "css- 600 readers")}
        {newsArticle("nextjs is using in induxtry now a day" , "NextJs- 300 readers")}
    

      
    </div>
  )
}

export default Widgets
