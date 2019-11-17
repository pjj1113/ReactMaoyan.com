import { INCREMENT } from '../actions/actionType'

const initState = {
    count:0
}

const countReducer = (state = initState, action ) => {
    const newState = { ...state }
    console.log(action)
    switch ( action.type ) {
        case INCREMENT:
          newState.count++
          break;
      
        default:
          break;
      }

    return newState

}
export default countReducer