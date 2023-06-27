import React from 'react';
import classes from "./MyModal.module.css";
import PostForm from "../../PostForm";

const MyModal = ({addNewPost, active, setModalActive}) => {
    function closeModule(e){
        const targetId = e.target.id;
        if(targetId === "background") {
            setModalActive(false)
        }
    }
    return (
        <div id="background" style={{display: (active ? "flex" : "none")}} onClick={closeModule} className={classes.background}>
            <div className={classes.myModal}>
                <h1>Create post</h1>
                <PostForm addNewPost={addNewPost} />
            </div>
        </div>
    );
};

export default MyModal;