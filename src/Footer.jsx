import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(){

    return(
        <div className="footer">
            <div className="icons-footer">
            <a href="https://instagram.com/isak_rahmani" className="contact-icons"><InstagramIcon style={{ fontSize: 40 }}/></a>

            <a href="https://www.facebook.com/isak.rahmani.3" className="contact-icons"><FacebookIcon style={{ fontSize: 40 }}/></a>

            <a href="https://github.com/ixoon/" className="contact-icons"><GitHubIcon style={{ fontSize: 40 }}/></a>
            </div>
        </div>
    );
}

export default Footer;