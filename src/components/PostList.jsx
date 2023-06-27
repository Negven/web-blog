import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, removePost}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.length === 0 ?
                <h2 style={{textAlign: "center"}}>Posts not found</h2> :
                <TransitionGroup >
                    {posts.map((post, index) =>
                        <CSSTransition
                            key={'postId_' + post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem removePost={removePost} post={post}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            }
        </div>
    );
};

export default PostList;