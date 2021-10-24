import React from "react";
import "../css/card.css"
import { Link } from "react-router-dom"

const Card = (props) => {
    console.log(props.Data)
    return (
        <div className="home">
            {
                props.Data.map((val) => {
                    return (
                        <div>
                            <div className="card">
                                <Link to="">
                                <img src={val.images["Poster Art"].url} />

                                </Link>
                                <div className="cardtitle">{val.title}</div>

                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Card