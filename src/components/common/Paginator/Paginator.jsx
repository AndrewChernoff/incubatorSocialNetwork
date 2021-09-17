import React from "react";
import s from './Paginator.module.css';

const Paginator = ({ onPageChange, currentPage, totalUsersCount, pageSize }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span onClick={(e) => { onPageChange(p) }} className={currentPage === p ? s.selectedPage : undefined} key={p.toString()}>
                    {p}
                </span>
            }
            )}
        </div>
    )

}

export default Paginator;