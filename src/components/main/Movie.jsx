import React from "react";
import style from './Movie.module.css'

export const Movie = (props) => {

    return (
        <div className={style.movie}>
            <div className={style.poster}>
                <img src={props.posterUrl} alt=""/>
            </div>
            <div className={style.about}>
                <div className={style.title}>{props.title}</div>
                <div className={style.genres}>
                    {props.genres.map(g => {
                        return <div className={style.genre}
                                    onClick={()=>{props.setFilterValue('genre',g)}}>{g}</div>
                    })}
                </div>
                <div>
                    <div>Year: {props.year}</div>
                    <div>Runtime (min): {props.runtime}</div>
                    <div>Director: {props.director}</div>
                    <div>Actors: {props.actors}</div>
                </div>
                <div>
                    {
                        props.plot.length > 80
                            ? `${props.plot.slice(0, 80)}...`
                            : props.plot
                    }
                </div>
                <div></div>
            </div>


        </div>
    )
}