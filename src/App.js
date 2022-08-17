import React, {useState} from "react";
import './App.css';
import data from './data/db.json'
import {DisplayOptions} from "./components/settings/DisplayOptions";
import {MainContent} from "./components/main/MainContent";
import {Pages} from "./components/Pages";

let allMovies = data.movies

function App() {
    let [currentMovies, setCurrentMovies] = useState([...allMovies])
    let [currentFilters, setCurrentFilters] = useState(
        {year: 'none', genre: 'none', search: 'none'})
    let [currentSort, setCurrentSort] = useState('none')
    let [saved, setSaved] = useState([...allMovies])
    let [pageSize, setPageSize] = useState(10)
    let [currentPage, setCurrentPage] = useState(1)

    const findMovie = (title) => {
        if (title === '') {
            setCurrentFilters({...currentFilters, search: 'none'})
            setCurrentMovies([...allMovies])
        } else {
            setCurrentFilters({year: 'none', genre: 'none', search: title})
            setCurrentSort('none')
            setCurrentMovies([...allMovies].filter(m => m.title === title))
        }
    }

    const setFilerValue = (type, value) => {
        let filteredMovies = [...allMovies]
        let changeFilters = {...currentFilters, [type]: value, search: 'none'}
        if (changeFilters.year !== 'none') {
            filteredMovies = [...filteredMovies]
                .filter(m => m.year === changeFilters.year)
        }
        if (changeFilters.genre !== 'none') {
            filteredMovies = [...filteredMovies]
                .filter(m => m.genres.includes(changeFilters.genre))
        }
        setCurrentMovies(filteredMovies)
        setCurrentFilters(changeFilters)
        setCurrentSort('none')
        setSaved([...filteredMovies])
    }

    const setSortValue = (sortType) => {
        setCurrentSort(sortType)
        if (sortType === 'none') {
            setCurrentMovies([...saved])
        }
        if (sortType === 'year') {
            setCurrentMovies([...currentMovies].sort((a, b) => a.year - b.year))
        }
        if (sortType === 'runtime') {
            setCurrentMovies([...currentMovies].sort((a, b) => a.runtime - b.runtime))
        }
        if (sortType === 'title') {
            function byTitle(title) {
                return (a, b) => a[title] > b[title] ? 1 : -1;
            }
            setCurrentMovies([...currentMovies].sort(byTitle('title')))
        }
    }

    const restart = () => {
        setCurrentMovies([...allMovies])
        setCurrentFilters({year: 'none', genre: 'none', search: 'none'})
        setCurrentSort('none')
        setSaved([])

    }
    const choosePageSize = (size) => {
        setPageSize(size)
        setCurrentPage(1)
    }
    const setPage = (page) => {
        setCurrentPage(page)
    }

    return (
        <div className="App">
            <button className='BIG_RED' onClick={restart}>BIG RED</button>
            <DisplayOptions
                findMovie={findMovie}
                setFilterValue={setFilerValue}
                currentFilters={currentFilters}
                currentSort={currentSort}
                setSortValue={setSortValue}/>
            <MainContent movies={currentMovies}
                         setFilterValue={setFilerValue}
                         pageSize={pageSize}
                         currentPage={currentPage}/>
            <Pages pageSize={pageSize}
                   choosePageSize={choosePageSize}
                   currentPage={currentPage}
                   setPage={setPage}
                   moviesAmout={currentMovies.length}/>
        </div>
    );
}

export default App;
