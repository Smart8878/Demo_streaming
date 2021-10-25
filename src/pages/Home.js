import React from "react"
import Header from "../components/Header"
import Footer from "../components/footer"
import "../css/card.css"
import image from "../assets//placeholder.png"
import { Link } from "react-router-dom"
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            showType: [
                { name: "movies" }, { name: "series" }
            ]

        }
    }
    render() {
        console.log(image)
        return (
             <div className="container" style={{height:"100%"}}>
                <div style={{position:"fixed",top:"0",left:"0",right:"0"}}>
                    <Header />
                </div>

                <div className="home" style={{marginTop:"200px"}}>


                    {
                        this.state.showType.map((val) => {
                            return (
                                <div>
                                    <div className="homecard">

                                        <Link to={`/${val.name}`}>
                                            <img src={image} />
                                            <div className="image-text">{val.name.toUpperCase()}</div>
                                            <div className="homecardtitle" style={{ color: "black" }}>{val.name}</div>
                                        </Link>

                                    </div>
                                </div>


                            )
                        })
                    }

                </div>
                <div style={{position:"absolute",left:"0",right:"0",bottom:"0"}}>
                    <Footer />
                </div>


            </div>
        )
    }

}

export default Home
