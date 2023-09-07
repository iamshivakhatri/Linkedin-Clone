import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedinIcon from "./icons/Linkedin.png"
import HeaderOption from './HeaderOption';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Header = () => {
  return (
    <div className='header'> 

    <div className="header__left">
        <img src = {LinkedinIcon}  alt="" />

        <div className="header__search">
            {/** Search Icon */}
            <SearchIcon/>
           
        
            <input type="text" />
        </div>

    </div>

    <div className="header__right">

        <HeaderOption Icon = {PeopleIcon} title ="Home"/>
        <HeaderOption Icon = {HomeIcon} title = "My network"/>
        <HeaderOption Icon = {WorkIcon} title = "Jobs"/>
        <HeaderOption Icon = {ChatIcon} title = "Messaging"/>
        <HeaderOption Icon = {NotificationsIcon} title = "Notifications"/>
        <HeaderOption avatar = "https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/345047980_621066473280801_7400479342369081413_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=E48fdm28_ZQAX_3P1xQ&_nc_ht=scontent.fosu2-1.fna&oh=00_AfBox2y9E40G4UFuZeTAzH__b8t1cb-eH1UR9YYlDXZUlw&oe=64FDD97C" 
        title = "Me"/>

    </div>
    
    </div>
  )
}

export default Header