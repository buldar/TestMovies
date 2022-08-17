import React, {useState} from "react";

export const Search = (props) => {

    let [searchValue, setSearchValue] = useState('')

    const changeSearchValue = (e) => {
        setSearchValue(e.currentTarget.value)
    }
    const findMovie = (e) => {
        if (e.charCode === 13) {
            props.findMovie(searchValue)
            setSearchValue('')
        }
    }

    return (
        <div>
            <input type="text"
                   placeholder='Find'
                   onChange={changeSearchValue}
                   onKeyPress={findMovie}
                   value={searchValue}/>
        </div>
    )
}