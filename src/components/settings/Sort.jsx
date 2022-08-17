import React, {useState} from "react";
import style from "./Filter.module.css";

export const Sort = (props) => {
    let [mode, setMode] = useState(false)

    const changeMode = () => {
        setMode(!mode)
    }
    const setSortValue = (type) => {
        setMode(false)
        props.setSortValue(type)
    }
    return (
        <div className={style.hidden}>
            <div className={style.select}>
                <div onClick={changeMode} >
                    {
                        props.currentSort==='none'
                    ?'Sort by...'
                    :props.currentSort
                    }
                </div>
                {
                    mode && props.values
                        .map((v, i) => <div key={i}
                        onClick={()=>{setSortValue(v)}}>{v}</div>)
                }
            </div>
        </div>
    )
}