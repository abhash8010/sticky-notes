import React from 'react'
import { MdSearch } from 'react-icons/md'

function SearchBar({setSearchTxt}) {
    return (
        <div className="search-bar">
           <MdSearch className="search-icon" size="1.3em"/> 
           <input type="text" placeholder="Type to search" onChange={(e)=>{setSearchTxt(e.target.value)}}></input>
        </div>
    )
}

export default SearchBar
