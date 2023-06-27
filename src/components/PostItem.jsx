import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = ({post, removePost}) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="post">
                <div className="post__container">
                    <h2>{post.id}. {post.title}</h2>
                    <p>
                        {post.body}
                    </p>
                </div>
                <div className="post__buttons">
                    <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Open</MyButton>
                    <MyButton onClick={() => removePost(post.id)}>Delete</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;