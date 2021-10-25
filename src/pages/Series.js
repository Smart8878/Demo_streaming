import React, { Suspense, lazy } from "react"
import Header from "../components/Header"
import Footer from "../components/footer"
import "../css/card.css"
import Search from "../components/Search"
import Card from "../components/card"
import {filterData,SortFilterdata,searchbyTitle} from "../components/util"

class Series extends React.Component {
    constructor() {
        super();
        this.state = {
            SeriesData: [],
            Temp: []


        }
    }

    componentDidMount() {
        //filter movie those are release 2010 and after 2010
      
        const filterdata =   filterData("series")

        //filter movies title assending order

        let sortTitle = SortFilterdata(filterdata)
      

        this.setState({ SeriesData: sortTitle, Temp: sortTitle })
    
    }

//search function for search filter particular movie by title

handleSearch = (e) => {
    if (e.target.value != "") {
       const temp= searchbyTitle(this.state.SeriesData,e.target.value)
        
        this.setState({ Temp: temp })
    }
    else {
        this.setState({ Temp: this.state.SeriesData })
    }
}

render() {
    return (
       <div>
                <div style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "1" }}>
                    <Header />
                    <Search handleSearch={this.handleSearch} />
                </div>

                <div style={{ marginTop: "200px" }}>
                    <Suspense fallback={<div>Loading.....</div>}>
                        <Card Data={this.state.Temp} />
                    </Suspense>
                </div>

                <Footer />
            </div>
)
}

}

export default Series
