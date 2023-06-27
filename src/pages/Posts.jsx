import React, {useEffect, useRef, useState} from "react";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import useFetch from "../hooks/usePosts/useFetch";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";
import {useObserver} from "../hooks/usePosts/useObserver";

function Posts() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modalActive, setModalActive] = useState(false);
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1)
    const [fetchPosts, isPostsLoading, error] = useFetch(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })
    const observerBlock = useRef();

    useObserver(observerBlock, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts();
    }, [page])


    function addNewPost(post) {
        setPosts([...posts, post]);
        setModalActive(false);
    }

    function removePost(postId) {
        setPosts(posts.filter(post => post.id !== postId))
    }

    function changePage(pageNumber) {
        setPage(pageNumber);
    }


    return (
        <div className="App">
            <MyButton onClick={() => setModalActive(true)}>Create post</MyButton>
            <hr />
            <MyModal active={modalActive} setModalActive={setModalActive} addNewPost={addNewPost} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {error &&
                <h1>Error: ${error}</h1>
            }
            {isPostsLoading && <Loader /> }
            <div>
                <PostList posts={sortedAndSearchPosts} removePost={removePost} title="Post list"/>
                <div ref={observerBlock} style={{height: '20px', opacity: '0'}}></div>
                <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
            </div>
        </div>
    );
}

export default Posts;
