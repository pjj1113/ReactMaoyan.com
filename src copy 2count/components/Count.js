import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {increment} from '../actions'

class Count extends React.Component{
    add = () =>{

    }
    render(){
        const { count,increment } = this.props 
        return(
            <div>
                <button onClick = { increment }>+</button>
                     <p>count:{ count }</p>
            </div>
        )
    }
}
export default connect(
    state => {
        return {
            count:state.countState.count
        }
    },
    dispatch => bindActionCreators({increment},dispatch)
    )( Count ) 
