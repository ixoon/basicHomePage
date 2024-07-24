import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';


function Header(){
    return(
        <>
        <div className="header-container">
            <a href='https://www.google.com'>
            <h2>Home 
                <HomeIcon /></h2> </a>
            <a href='https://instagram.com/isak_rahmani'>
            <h2>About 
                <InfoIcon/></h2> </a>
            <a href='https://www.facebook.com/isak.rahmani.3'>
            <h2>Contact
                <CallIcon/></h2> </a>
        </div>
        <hr></hr>
        </>
    )
}

export default Header;