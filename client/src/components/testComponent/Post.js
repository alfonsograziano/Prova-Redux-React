import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchPosts } from "./postReducer";
import { setToken } from "../redux-store/authReducer";
import { logout } from "../redux-store/authReducer";


function Post(props) {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        dispatch(setToken("Tokeeennn"))
        dispatch(fetchPosts())
    }, [])

    useEffect(() => {
        if(typeof state.auth.token !== "undefined"){
            setPosts(state.post)
        }else{
            setPosts({})
        }

    }, [state])


    const login = () => {
        dispatch(setToken("AUTH-user123"))
    }


    const esciDaStoCazzoDiAccount = () => {
        dispatch(logout())
    }


    return (
        <div>
            <h1>{state.auth.appName}</h1>
            {(state.auth.token) ?
                <div>
                    <h2>Utente loggato</h2>
                    <button onClick={esciDaStoCazzoDiAccount}>Logout</button>
                </div>
                :
                <div>
                    <h2>Utente non loggato</h2>
                    <button onClick={login}>Login</button>
                </div>
            }
            <p>
                {JSON.stringify(posts)}
            </p>
        </div>
    )
}

export default Post