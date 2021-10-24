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
            <div>
                <div>
                    <Header />
                </div>

                <div className="home">


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
                <div>

                    <Footer />
                </div>


            </div>
        )
    }

}

export default Home