import { ADD_TODO } from './actionType'

import store from '../store'
export const addTodo = val =>{
    store.dispatch({
        type: ADD_TODO,
        payload: val
    })
    console.log('action')

} 