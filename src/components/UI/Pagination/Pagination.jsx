import React from 'react';
import classes from "./Pagination.module.css";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({page, totalPages, changePage}) => {
    const pagesArray = getPagesArray(totalPages);
    return (
        <div className={classes.container}>
            {pagesArray.map((number) =>
                <div
                    key={number}
                    className={classes.button + ' ' + (page === number ? classes.button_active : '')}
                    onClick={()=>{changePage(number)}}
                >{number}</div>
            )}
        </div>
    );
};

export default Pagination;