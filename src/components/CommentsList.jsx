import React, {useEffect, useState} from 'react';
import useFetch from "../hooks/usePosts/useFetch";
import PostService from "../API/PostService";
import CommentItem from "./CommentItem";

const CommentsList = ({postId}) => {
    const [comments, setComments] = useState([]);
    const [commentsFetching, isLoading, error] = useFetch(async (postId) => {
        const { data } = await PostService.getCommentsById(postId);
        setComments(data);
    })
    useEffect(() => {
        commentsFetching(postId);
    }, [])
    return (
        <div>
            <h2>Comments</h2>
            {comments.map(comment =>
                <CommentItem comment={comment} key={comment.id}/>
            )}
        </div>
    );
};

export default CommentsList;