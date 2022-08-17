import React from "react";
import style from './MainContent.module.css'
import {Movie} from "./Movie";

export const MainContent = (props) => {

    return (
        <div className={style.main}>
            {
                props.movies.map(m => {
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
                    />
                })
            }
        </div>
    )
}