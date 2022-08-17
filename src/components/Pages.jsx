import React from "react"
import style from './Pages.module.css'

export const Pages = (props) => {

    let pagesCount = Math.ceil(props.moviesAmout / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    if (props.currentPage <= 5) {
        pages = pages.slice(0, 10)
    } else {
        pages = pages.slice(props.currentPage - 5, props.currentPage + 5)
    }

    return (
        <div className={style.pages}>
            <div>
                {
                    pages.map(p => <span className={
                        props.currentPage===p?style.selected:''
                    }
                    onClick={()=>{props.setPage(p)}}>{p}</span>)
                }
            </div>
            <div>
                <span className={props.pageSize === 5 ? style.selected : ''}
                      onClick={()=>{props.choosePageSize(5)}}>5</span>
                <span className={props.pageSize === 10 ? style.selected : ''}
                      onClick={()=>{props.choosePageSize(10)}}>10</span>
                <span className={props.pageSize === 20 ? style.selected : ''}
                      onClick={()=>{props.choosePageSize(20)}}>20</span>
            </div>
        </div>
    )
}