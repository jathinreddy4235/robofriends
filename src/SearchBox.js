import React from "react";

const SearchBox = ({searchChange}) => {
    return (
    <div className="p-2 bg-blue-400"> 
    <input className="border-2 border-black text-3xl text-center bg-green-300 rounder-full" type = 'search' placeholder="search"
     onChange = {searchChange}/></div>
    
);}

export default SearchBox;