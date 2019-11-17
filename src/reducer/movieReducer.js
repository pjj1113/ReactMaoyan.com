import { GET_MOVIE,GET_LOAD } from '../actions/actionType'

const initState = {
    movieData:null,
    movieDataList:null
}

const movieReducer = (state = initState,action)=>{
    const newState = { ...state }
    
    switch(action.type){
        case GET_MOVIE:
            newState.movieData = action.payload
            // newState.movieDataList = action.payload.movieList
            break;
        case GET_LOAD:
            // console.log( action.payload)
            action.payload&& newState.movieData.movieList.push(...action.payload.coming)
            // action.payload&& newState.movieDataList.push(...action.payload.coming)
            break;
        default:
            break;
    }

    return newState
}

export default movieReducer