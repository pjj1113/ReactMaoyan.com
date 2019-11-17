import React,{ Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import BSscrool from 'better-scroll'
import { getMovie,getLoad } from '../../actions'

import _ from 'lodash'
import './index.scss'
import MovieList from './MovieList'
import { Toast } from 'antd-mobile';
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      movieDataListL:[]
    }
  }
  componentDidMount () {
     console.log(1)
    this.props.getMovie()
    // const wrapper = document.querySelector('.page')
    // //选中DOM中定义的 .wrapper 进行初始化\
    const bs = new BSscrool('.page',{
      pullUpLoad: {
              threshold: 100 
          }
      })


      let count = 0
        bs.on('pullingUp',()=>{
            const movieIds = this.props.movieData.movieIds
            const ids = _.chunk( movieIds,10 )

            if(count == ids.length-1){
              Toast.offline('没有数据了', 1);
              bs.finishPullUp() 
              return;
            }else{
              console.log(count,ids.length)
              if(count < ids.length){
                this.props.getLoad(ids[ count+1 ].join(','))
                Toast.loading('正在请求...', 1, () => {
                });
                const { movieDataListL } = this.state
  
                this.setState({
                  movieDataListL:movieDataListL.concat(this.props.movieDataList)
                })
                  setTimeout(()=>{
                    
                      
                  },2000)
              }
            }
           
            
            bs.finishPullUp()
            count++
        })
        setTimeout(() => {
          Toast.hide();
        }, 3000);

      }


    
    render(){
        const { movieData } = this.props
        console.log(movieData)
        return (
           <div className = "movie-box">
             <div className="tab-content">
                <div className="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
                    <div className="list-wrap" style={{marginTop:"0px"}}>
                        <MovieList movieData = { movieData }></MovieList>
                    </div>
                </div>
             </div>
           </div>
        )
    }
}
export default connect(
    state => state.movieState,
    dispatch => bindActionCreators({ getMovie,getLoad }, dispatch )
)( Home )