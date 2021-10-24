import React from "react"

const Search = (props) => {
    return (
        <div className="search">
            <label style={{padding:"15px"}}>Search</label>
             <input type="search" name="title" placeholder="title" onChange={(e) => props.handleSearch(e)} />
        </div>
    )

}

export default Search;