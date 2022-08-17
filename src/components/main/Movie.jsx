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
                        return <div className={style.genre}>{g}</div>
                    })}
                </div>
                <div>
                    <div>Год: {props.year}</div>
                    <div>Продолжительность (мин): {props.runtime}</div>
                    <div>Режиссер: {props.director}</div>
                    <div>В ролях: {props.actors}</div>
                </div>
                <div>
                    {props.plot.slice(0,80)}
                </div>
                <div></div>
            </div>


        </div>
    )
}