import axios from "axios"
//_PENDING _FULFILLED _REJECTED

/*
fetching: true/false
fetched: true/false 
data: res.data
error: ""

*/

const FETCH_POSTS = "FETCH_POSTS"
const FETCH_POSTS_PENDING = "FETCH_POSTS_PENDING"
const FETCH_POSTS_FULFILLED = "FETCH_POSTS_FULFILLED"
const FETCH_POSTS_REJECTED = "FETCH_POSTS_REJECTED"
export const fetchPosts = ()=>{
    return {
        type: FETCH_POSTS,
        payload: axios.get("https://jsonplaceholder.typicode.com/posts")
    }
}

const initialState = {fetched:false, fetching:false, error:"",data:{}}
export const postReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_POSTS_PENDING:
            return {...state, fetching:true, fetched:false, error: ""}
        case FETCH_POSTS_FULFILLED:
            return {...state, fetching:false, fetched:true, data: action.payload.data}
        case FETCH_POSTS_REJECTED:
            return {...state, fetching:false, fetched:false, error: action.payload.message}
    }
    return state
}

