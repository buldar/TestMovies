import React, {useState} from "react";
import style from './DisplayOptions.module.css'

const sortAndFilterTypes = {
    
}


const filterTypes = [
    'Choose filter',
    'Year',
    'Genre'
]

const filtersValues = {
    ['Year']: ['None', '2000', '1994', '2005'],
    ['Genre']: [
        "None",
        "Comedy",
        "Fantasy",
        "Crime",
        "Drama",
        "Music",
        "Adventure",
        "History",
        "Thriller",
        "Animation",
        "Family",
        "Mystery",
        "Biography",
        "Action",
        "Film-Noir",
        "Romance",
        "Sci-Fi",
        "War",
        "Western",
        "Horror",
        "Musical",
        "Sport"
    ]
}
const sortTypes = ['None', 'Year', 'Title', 'RunTime']


export const DisplayOptions = (props) => {

    let [filterTypeMode, setFilterTypeMode] = useState(false)
    let [filterValueMode, setFilterValueMode] = useState(false)
    let [sortMode, setSortMode] = useState(false)

    const nameMovieToSearch = (e) => {
        props.nameMovieToSearch(e.currentTarget.value)
    }
    const startSearch = (e) => {
        props.startSearch(e)
    }
    const changeFilterType = (value) => {
        props.changeFilterType(value)
        setFilterTypeMode(false)
    }
    const changeFilterTypeMode = () => {
        setFilterTypeMode(!filterTypeMode)
    }
    const changeFilterValueMode = () => {
        setFilterValueMode(!filterValueMode)
    }
    const changeSortMode = () => {
        debugger
        setSortMode(!sortMode)
        debugger
    }
    const changeSortType = (value) => {
        props.useSort(value)
        setSortMode(false)
    }

    return (
        <div className={style.filters}>
            <div>
                <input onKeyPress={startSearch} onChange={nameMovieToSearch} value={props.search} type="text"
                       placeholder='Find'/>
            </div>
            <div className={style.hidden}>
                <div className={style.select}>
                    <div onClick={changeFilterTypeMode}>{props.filterType}</div>
                    {
                        filterTypeMode && filterTypes
                            .map((f, i) => <div key={i} onClick={() => changeFilterType(f)}>{f}</div>)
                    }
                </div>
            </div>
            <div className={style.hidden}>
                <div className={style.select}>
                    <div onClick={changeFilterValueMode}>{props.filterValue}</div>
                    {
                        filterValueMode && filtersValues[props.filterType]
                            .map((v, i) => <div key={i} onClick={() => props.useFilter(v)}>{v}</div>)
                    }
                </div>

            </div>
            <div className={style.hidden}>
                <div className={style.select}>
                    <div onClick={changeSortMode}>{props.sortType}</div>
                    {
                        sortMode && sortTypes
                            .map((s, i) => <div key={i} onClick={() => changeSortType(s)}>{s}</div>)
                    }
                </div>
            </div>
        </div>
    )
}