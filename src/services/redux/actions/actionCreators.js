import { USER_LOG_IN } from '../actions/types'

const loginAction = (payload) => {
    return {
        type: USER_LOG_IN,
        payload: payload
    }
}

export default { loginAction };