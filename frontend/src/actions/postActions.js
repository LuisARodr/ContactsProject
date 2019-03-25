import { FETCH_POSTS, NEW_POST, REMOVE_CONTACT , UPDATE_CONTACT} from './types'
/*
//old fetch
export const fetchPosts = () => dispatch =>{
    fetch('http://localhost:3000/contact?page=0&limit=10')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
}*/
//new paged fetch
export const fetchPosts = (page,limit) => dispatch =>{
    fetch(`http://localhost:3000/contact?page=${page}&limit=${limit}`)
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
}

export const createPost = (postData) => dispatch =>{
    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }));
}

export const modifyPost = (id, postData) => dispatch =>{
    fetch(`http://localhost:3000/contact/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: UPDATE_CONTACT,
        payload: post
    }));
}

export const deleteContact = (id) => dispatch => {
    fetch(`http://localhost:3000/contact/${id}`, {
        method: 'DELETE'})
    .then(dispatch({
        type: REMOVE_CONTACT
    }))
}