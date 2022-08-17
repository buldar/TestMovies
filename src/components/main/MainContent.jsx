import React from "react";
import style from './MainContent.module.css'
import {Movie} from "./Movie";
import {DisplayOptions} from "../settings/DisplayOptions";

export const MainContent = (props) => {

    let currentPage = props.currentPage
    let pageSize = props.pageSize
    let movies = props.movies
        .slice(pageSize*(currentPage-1),(pageSize*(currentPage-1))+pageSize)

    return (
        <div className={style.main}>
            {
                movies.map(m => {
                    return <Movie
                        key={m.id}
                        title={m.title}
                        year={m.year}
                        runtime={m.runtime}
                        genres={m.genres}
                        director={m.director}
                        actors={m.actors}
                        plot={m.plot}
                        posterUrl={m.posterUrl}
                        setFilterValue={props.setFilterValue}
                    />
                })
            }
        </div>
    )
}