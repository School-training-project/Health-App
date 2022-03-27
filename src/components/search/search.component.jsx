import React from 'react'
import "./search.styles.css"
export const Search = (({placeHolder, handleChange}) => {
    return (
        <input
            className='search'
            type="search"
            placeholder={placeHolder}
            onChange={handleChange}
        />
    )
})