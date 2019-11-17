import { createStore,applyMiddleware } from 'redux'

import  rootReducer  from '../reducer/index'
import trunk from 'redux-thunk'
const store = createStore( rootReducer,applyMiddleware(trunk) )

export default store