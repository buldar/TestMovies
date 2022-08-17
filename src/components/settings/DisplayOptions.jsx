import React from "react";
import style from './DisplayOptions.module.css'
import {Search} from "./Search";
import {Filter} from "./Filter";
import {Sort} from "./Sort";

const filtersAndSortsTypes = {
    filters: [
        {
            type: 'year',
            values: ['none', '2013', '2012', '2011', '2010', '2009',
                '2008', '2007', '2006', '2005', '2004',
                '2003', '2002', '2001', '2000']
        },
        {
            type: 'genre',
            values: [
                'none',
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
    ],
    sort: ['none', 'year', 'runtime', 'title']
}

export const DisplayOptions = (props) => {
    return (
        <div className={style.options}>
            <div className={style.search}>
                <Search findMovie={props.findMovie}/>
            </div>
            <div className={style.filters}>
                {
                    filtersAndSortsTypes.filters.map((f, i) =>
                        <Filter key={i}
                                type={f.type}
                                values={f.values}
                                setFilterValue={props.setFilterValue}
                                currentFilters={props.currentFilters}/>
                    )
                }
            </div>
            <div>
                <Sort values={filtersAndSortsTypes.sort}
                      currentSort={props.currentSort}
                      setSortValue={props.setSortValue}/>
            </div>
        </div>
    )
}