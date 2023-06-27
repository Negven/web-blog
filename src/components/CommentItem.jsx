import React from 'react';
import classes from "./CommentsItem.module.css";
const CommentItem = ({comment}) => {
    return (
        <div className={classes.comment}>
            <h3>Name: {comment.name}</h3>
            <p>Text: {comment.body}</p>
        </div>
    );
};

export default CommentItem;