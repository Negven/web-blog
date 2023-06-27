import NotFound from "../pages/notFound";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import Login from "../components/Login";

export const privateRoutes =[
    {
        name: 'Posts',
        path: '/posts',
        element: <Posts />
    },
    {
        name: 'About Us',
        path: '/about',
        element: <About />
    },
    {
        name: null,
        path: '*',
        element: <NotFound />
    },
    {
        name: null,
        path: '/posts/:id',
        element: <PostPage />
    },
];

export const publicRoutes = [
    {
        name: 'Login',
        path: '/login',
        element: <Login />
    },
    {
        name: null,
        path: '*',
        element: <NotFound />
    },
]