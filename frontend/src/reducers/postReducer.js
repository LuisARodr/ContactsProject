//here you fetch your posts and those things
import { FETCH_POSTS, NEW_POST, REMOVE_CONTACT, UPDATE_CONTACT} from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            return{
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        case REMOVE_CONTACT:
            return {...state}

        case UPDATE_CONTACT:
            return {
                ...state,
                item: action.payload
            }
        default: 
            return state;
    }
}