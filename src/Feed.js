import React from 'react'
import  './Feed.css'
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

const Feed = () => {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
           
            <form action="">
                <input type="text" />
                <button type='submit'> Send</button>
            </form>
            </div>
            <div className="feed__inputOptions">
                {/** */}
                <InputOption Icon = {InsertPhotoIcon} title = "Photo" color = "#70B5F9"/>
                <InputOption Icon = {VideocamIcon} title = "Video" color = "#E7A33E"/>
                <InputOption Icon = {EventIcon} title = "Event" color = "#COCBCD"/>
                <InputOption Icon = {ArticleIcon} title = "Write Article" color = "#7FC15E"/>
            </div>

        </div>
    </div>  
  )
}

export default Feed