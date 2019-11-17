import React,{ Component } from 'react'
import Tab from '../components/Tab'
import './index.scss'
import Home from '../pages/home'
import TabBar from '../components/tabbar'
import { Route,Redirect,Switch } from 'react-router-dom'

import Recommend from '../pages/Recommend'
import Mine from '../pages/Mine'

class LayOut extends Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){
        return(
            <div className ="layout-box">
                <Tab></Tab>
                {/* <Movie></Movie> */}
                <Switch>
                    <Redirect  from = "/" to = "/home" exact></Redirect>
                    <Route path = "/home" component = { Home } ></Route>
                    <Route path = "/recommend" component = { Recommend }></Route>
                    <Route path = "/mine" component = { Mine }></Route>

                </Switch>
                {/* <Home className = "content"></Home> */}
                <TabBar></TabBar>
            </div>
        )
    }
}



export default LayOut