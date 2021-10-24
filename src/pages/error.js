import React from "react"
import Header from "../components/Header"
import Footer from "../components/footer"

const Error = () => {
    return (
        <div>
            <Header />
            <div style={{height:"345px",marginTop:"50px",marginLeft:"100px"}}>
                <label>Oops, something went wrong..</label>
            </div>
            <Footer />
        </div>
    )

}

export default Error;