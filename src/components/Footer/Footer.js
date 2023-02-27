import React from "react"
import Style from "./Footer.module.css"
import {AiFillFacebook} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

//footer of movie app
function Footer(){
    return(
        <>
        <div className={Style.footer}>
           <div>
          
             <div className={Style.headericon}>
                 <AiFillFacebook/>
                 <BsTwitter/>
                 <BsInstagram/>
                 <AiOutlineMail/>

             </div>
             <div className={Style.copyright}>
                Copyright © 2000-2023 , movie.com 
             </div>
           </div>
        
        </div>
        
        
        </>
    )
}
export default Footer;
