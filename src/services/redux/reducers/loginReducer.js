import { USER_LOG_IN } from '../actions/types'

const loginInitialState = null;

const loginReducer = (token = loginInitialState, action) => {

    switch(action.type){
        case USER_LOG_IN:
            return action.payload
        default: return token
    }
}

export default loginReducer;