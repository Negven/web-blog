import React, {useEffect, useState} from "react";
import "./styles/App.css"
import Posts from "./pages/Posts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Header from "./components/UI/Header/Header";
import NotFound from "./pages/notFound";
import PostPage from "./pages/PostPage";
import {privateRoutes, publicRoutes} from "./routes/routes";
import Login from "./components/Login";
import {AuthContext} from "./context/context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        }
    })
  return (
      <AuthContext.Provider value={{
          isAuth, setIsAuth
      }}>
        <BrowserRouter>
            <Header menuItems={isAuth ? privateRoutes : publicRoutes}></Header>
            <Routes>
                {isAuth ?
                    privateRoutes.map((route, index) =>
                        <Route path={route.path} element={route.element} key={`route${index}`}/>)
                    : publicRoutes.map((route, index) =>
                        <Route path={route.path} element={route.element} key={`route${index}`}/>)
                }
            </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
