import React, {useState} from "react";
import style from './Filter.module.css'

export const Filter = (props) => {
    let [mode, setMode] = useState(false)

    const changeMode = () => {
        setMode(!mode)
    }
    const chooseFilterValue = (value) => {
        setMode(false)
        props.setFilterValue(props.type, value)
    }

    return (

        <div className={style.hidden}>
            <div className={style.select}>
                <div onClick={changeMode}>
                    {
                        props.currentFilters[props.type] === 'none'
                            ? `Choose ${props.type}`
                            : props.currentFilters[props.type]
                    }
                </div>
                {
                    mode && props.values
                        .map((v, i) => <div key={i}
                                            onClick={() => {
                                                chooseFilterValue(v)
                                            }}>{v}</div>)
                }
            </div>
        </div>
    )
}