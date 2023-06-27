import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({addNewPost}) => {

    const [newPost, setNewPost] = useState({
        title: '',
        text: '',
    });

    function createPost(event) {
        event.preventDefault();
        const post = {
            id: Date.now(),
            title: newPost.title,
            body: newPost.text
        }
        setNewPost({
            title: '',
            body: '',
        })
        addNewPost(post);

    }

    return (
        <form>
            <MyInput
                value={newPost.title}
                onChange={e => setNewPost({...newPost, title: e.target.value})}
                type="text"
                placeholder="Posts' headline"
            />
            <MyInput
                value={newPost.text}
                onChange={e => setNewPost({...newPost, text: e.target.value})}
                type="text"
                placeholder="Posts' text"
            />
            <MyButton onClick={createPost} >Create post</MyButton>
        </form>
    );
};

export default PostForm;