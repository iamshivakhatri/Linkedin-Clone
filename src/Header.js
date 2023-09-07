import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedinIcon from "./icons/Linkedin.png"
import HeaderOption from './HeaderOption';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';


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

    </div>
    
    </div>
  )
}

export default Header