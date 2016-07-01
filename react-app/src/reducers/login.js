import { SET_LOGIN } from '../actions'
export default function login(state = {}, action) {
    switch (action.type) {
        case SET_LOGIN:
            return action.user;
        default:
            return state;
    }
}