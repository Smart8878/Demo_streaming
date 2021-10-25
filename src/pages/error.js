import React from "react"
import Header from "../components/Header"
import Footer from "../components/footer"

const Error = () => {
    return (
       <div style={{ height: "100%" }}>
            <Header />
            <div style={{ height: "345px", marginTop: "50px", marginLeft: "100px" }}>
                <label>Oops, something went wrong..</label>
            </div>
            <div style={{ position: "absolute", left: "0", right: "0", bottom: "0" }}>
                <Footer />
            </div>
        </div>
    )

}

export default Error;
