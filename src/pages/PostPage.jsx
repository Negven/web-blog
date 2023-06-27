import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useFetch from "../hooks/usePosts/useFetch";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import CommentsList from "../components/CommentsList";

const PostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetch(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })

    useEffect(() => {
        fetchPostById(id);
    }, [])

    return (
        <div>
            {isLoading ?
                <Loader /> :
                <div>
                    <h1>Post page {id}</h1>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <CommentsList postId={id}/>
                </div>
            }
        </div>
    );
};

export default PostPage;