
import { ADD_TODO } from '../actions/actionType'
const initState = {
    todos:[
        {
            id:1,
            task:'任务1'
        },
        {
            id:2,
            task:"任务2"
        }
    ]
}

const reducers = (state = initState,actions) =>{
    const newStart = { ...state }
    switch ( actions.type ) {
        case ADD_TODO:
            console.log('dispatch')
            state.todos.push({
                id:state.todos.length,
                task:actions.payload
            })
            break;
    }

    return newStart
}


export default reducers
