import {createContext, useState} from "react";
import React from 'react'
const SearchUrlContext = createContext(null);

export const SearchUrlProvider = ({ children }) => {
    const [searchUrl, setSearchUrl] = useState("s=Pokemon")
    const values = {searchUrl,setSearchUrl}
    return <SearchUrlContext.Provider value={values}>{children}</SearchUrlContext.Provider>

}

export default SearchUrlContext;