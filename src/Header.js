import React from 'react'
import "./Header.css"
import PersonIcon from "@material-ui/icons/Person"
import { IconButton } from '@material-ui/core'
import ForumIcon  from "@material-ui/icons/Forum"
import download from "./images/download.jpeg"

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon'/>
        </IconButton>
        <img src={download} alt=''/>
        <IconButton>
            <ForumIcon fontSize='large' className='header__icon'/>
        </IconButton>
    </div>
  )
}

export default Header