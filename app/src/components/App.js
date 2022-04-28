import React, { Component } from 'react'
import Header from './Header'
import MenuAdmin from './MenuAdmin'
import Order from './Order'
import sampleBurgers from '../sample-burgers'
import Burger from './Burger'
import withRouter from '../utils/withRouter'
import base from '../services/firebase'
import PropTypes from 'prop-types'
import SignIn from './Auth/Sigin'
import firebase from 'firebase/app'

class App extends Component {

  static propTypes={
    router:PropTypes.object
  }

state={
  burgers:{},
  order:{}
}

componentDidMount(){
  const {params}=this.props.router;

  const localStorageRef = localStorage.getItem(params.restaurantId)
  this.setState({order: JSON.parse(localStorageRef)})

  this.ref=base.syncState(`${params.restaurantId}/burgers`,{
    context: this,
    state:'burgers'
  })
}



componentDidUpdate(){
  const {params}=this.props.router;
  localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order))
}


addBurger = burger => {
const burgers ={...this.state.burgers}
burgers[`burger${Date.now()}`] = burger
this.setState({burgers})
}
loadSampleBurgers=()=>{
this.setState({burgers:sampleBurgers})
}

addToOrder=(key)=>{
  const order = {...this.state.order}
  order[key]= order[key]+1 || 1
  this.setState({order})
}

updateBurger=(key,updatedBurger) => {
  const burgers = {...this.state.burgers}
  burgers[key] = updatedBurger
  this.setState({burgers})
}

deleteBurger=key=>{
  const burgers = {...this.state.burgers}
  burgers[key] = null
  this.setState({burgers})
}

deleteFromOrder=key=>{
  const order = {...this.state.order}
  delete order[key]
  this.setState({order})
}

handleLogout= async()=>{
  await firebase.auth().signOut()
  window.location.reload()
}

  render() {
    debugger
    return (
      <SignIn>
      <div className='burger-paradise'>
          <div className='menu'>
              <Header/>
              <ul className='burgers'>
                  {Object.keys(this.state.burgers).map(key=>{
                    return <Burger 
                    key={key}
                    index={key}
                    details={this.state.burgers[key]}
                    addToOrder={this.addToOrder}/>
                  })}
              </ul>
          </div>
          <Order 
          deleteFromOrder={this.deleteFromOrder}
          burgers={this.state.burgers} 
          order={this.state.order}/>
          <MenuAdmin 
          handleLogout={this.handleLogout}
          deleteBurger = {this.deleteBurger}
          updateBurger={this.updateBurger}
          burgers={this.state.burgers}
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
          />
      </div>
      </SignIn>
    )
  }
}

export default withRouter(App)
