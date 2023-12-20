import React, { createContext, useState, useEffect } from "react";

import { fetchFromApi } from '../utils/API'

export const Context = createContext()

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState(false)
    const [selectCategory, setSelectCategory] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        fetchSelectedCategoryData(selectCategory)
    }, [selectCategory])

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchFromApi(`search/?q=${query}`).then(({ contents }) => {
            setLoading(false)
            setSearchResults(contents)
        })
    }

    return (
        <Context.Provider value={{ loading, setLoading, searchResults, setSearchResults, selectCategory, setSelectCategory, mobileMenu, setMobileMenu }}>
            {props.children}
        </Context.Provider>
    )
}