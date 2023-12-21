import { UPDATE_AUTH } from '../actions/authAction'

const intialState = {
    auth: localStorage.getItem('token') || null,
    product: []
}

export default function auth(state=intialState, action){
    // return state;
    switch(action.type){
        case UPDATE_AUTH:
            return {
                ...state,
                auth: action.payload
            }
        default:
            return state;
    }
}
 