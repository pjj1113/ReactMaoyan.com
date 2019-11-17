import request from './request'
import { GET_MOVIE,GET_LOAD } from './actionType'


export const getMovie = () => {
  return async dispatch => {

      const result = await request({
        url: '/ajax/movieOnInfoList', 
        params: {
          token: ''
        }
      })
      dispatch({
        type: GET_MOVIE,
        payload: result.data 
      })
  }
}
export const getLoad = ( movieLIst ) =>{
  return async dispatch =>{
    const resultLadd = await request({
      url:'/ajax/moreComingList',
      params:{
        token: '',
        movieIds: movieLIst
      }
    })
    dispatch({
      type:GET_LOAD,
      payload:resultLadd.data
    })
  }
}