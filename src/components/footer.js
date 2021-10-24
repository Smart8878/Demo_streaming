import React from "react"
import facbook from "../assets/social/facebook-white.svg"
import twiter from "../assets/social/instagram-white.svg"
import instagram from "../assets/social/twitter-white.svg"
import app from "../assets/store/app-store.svg"
import play from "../assets/store/play-store.svg"
import windows from "../assets/store/windows-store.svg"


const footer = () => {
    return (
        <div className="footer">
            <div className="footerlink">
                <div>Home |</div>
                <div>Terms and Condition |</div>
                <div>Privacy Policy |</div>
                <div>Collection Statement |</div>
                <div>Help |</div>
                <div>Manage Account |</div>


            </div>
            <div className="copyrightlink">
                <p >Copyright @ 2016 DEMO Streaming.All Right Reserved</p>
            </div>
            <div className="medias">
                <div className="socials">

                    <img src={facbook} ></img>
                    <img src={twiter} ></img>
                    <img src={instagram} ></img>

                </div>
                <div className="stores">
                    <img src={app} ></img>
                    <img src={play} ></img>
                    <img src={windows} ></img>

                </div>

            </div>


        </div>
    )
}
export default footer;