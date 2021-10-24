import React from "react"
import "../App.css"
const Header = () => {
    return (
        <div>
            <div  style={{background:"rgb(65,65,65)"}}>
                <div className="header">

                    <div>
                        <h2>DEMO Streaming</h2>
                    </div>
                    <div className="navlink">
                        <a href="/login" style={{color:"white"}}>login</a>
                        <button className="trial-btn">start your free trial</button>
                    </div>

                </div>
                <div className="populer-tiles">
                    <h2 style={{ color: "white",marginTop:"0px"}}>Populer Tiles</h2>
                </div>


            </div>




        </div>

    )

}
export default Header;
