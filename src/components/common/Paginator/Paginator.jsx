import React, { useState } from "react";
import s from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({ onPageChange, currentPage, totalUsersCount, portionSize }) => {

    let portionCount = Math.ceil(totalUsersCount / portionSize);

    let pages = [];
    for (let i = 1; i <= portionCount; i++) {
        pages.push(i);
    }
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rigthPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
                .map(p => {
                    return <span onClick={(e) => { onPageChange(p) }} className={cn({ [s.selectedPage]: currentPage === p }, s.pageNumber)} key={p.toString()}>
                        {p}
                    </span>
                }
                )}
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}

        </div>
    )

}

export default Paginator;