import React, { Suspense, lazy,useEffect,useState } from "react"
import Header from "../components/Header"
import Footer from "../components/footer"
import "../css/card.css"
import Search from "../components/Search"
import { filterData, SortFilterdata, searchbyTitle } from "../components/util"
const Card = lazy(() => import('../components/card'))



const Movies = ()=> {
 
    const [Movies,setMovies]=useState([])
    const [Temp,setTemp]=useState([])


    useEffect(()=> {
        //filter movie those are release 2010 and after 2010

        const filterdata = filterData("movie")

        //filter movies title assending order

        let sortTitle = SortFilterdata(filterdata)


        setMovies(sortTitle)
        setTemp(sortTitle)


    },[])

    //search function for search filter particular movie by title

    const handleSearch = (e) => {


        if (e.target.value != "") {
            const temp = searchbyTitle(Movies, e.target.value)
            setTemp(temp)
        }
        else {
            setTemp(Movies)

        }

    }

  

        return (
           <div>
                <div style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "1" }}>
                    <Header />
                    <Search handleSearch={handleSearch} />
                </div>

                <div style={{marginTop:"200px"}}>
                    <Suspense fallback={<div>Loading.....</div>}>
                        <Card Data={Temp} />
                    </Suspense>
                </div>

                <Footer />
            </div>
        )
    }



export default Movies
