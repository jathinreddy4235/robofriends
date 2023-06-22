import React from "react";

const SearchBox = ({searchChange}) => {
    return (
    <div className="bg-blue-400"> 
    <input className="w-40 sm:w-auto border-2 border-black text-3xl text-center bg-green-300 rounder-full" type = 'search' placeholder="search"
     onChange = {searchChange}/></div>
    
);}

export default SearchBox;
