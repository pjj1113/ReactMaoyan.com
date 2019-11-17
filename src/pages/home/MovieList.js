import React, { Component,Fragment } from 'react'

 class MovieList extends Component {
    constructor(props){
        super(props)
        this.state = {
          
        }
      }

    movieList = ()=>{
        const { movieData,movieDataList } = this.props

         if(movieData){
          return movieData.movieList.map((item,index) =>
          <div key = { index } className="item" data-id="1218029" data-bid="dp_wx_home_movie_list">
          <div className="main-block">
            <div className="avatar">
              <div className="default-img-bg">
                <img
                  src={ item.img.replace('w.h','128.180') }
                />
              </div>
            </div>
            <div className="mb-outline-b content-wrapper">
              <div className="column content">
                <div className="box-flex movie-title">
                  <div className="title line-ellipsis">
                    {item.nm}
                  </div>
                </div>
                <div className="detail column">
                  <div className="score line-ellipsis">
                    <span className="score-suffix">观众评</span>
                    <span className="grade"> { item.sc } </span>
                  </div>
                  <div className="actor line-ellipsis">主演: { item.star} </div>
                  <div className="show-info line-ellipsis">
                    { item.showInfo }
                  </div>
                </div>
              </div>
              <div className="button-block" data-id="1218029">
                <div className={item.globalReleased && 'btn normal'|| 'btn pre' } >
                  <span className="fix" data-bid="dp_wx_home_movie_btn">
                    { item.globalReleased && '购买' || '预售'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>)
         }
      }
    render() {
        return (
           <Fragment>
               { this.movieList() }
           </Fragment>
        )
    }
}
export default MovieList