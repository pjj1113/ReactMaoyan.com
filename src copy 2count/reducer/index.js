import { combineReducers } from 'redux'

import countState from './countReducer'

const rootReducer = combineReducers({
    countState
})
export default rootReducer