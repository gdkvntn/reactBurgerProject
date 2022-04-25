import React, { Component } from 'react'
import Header from './Header'
import MenuAdmin from './MenuAdmin'
import Order from './Order'


export default class App extends Component {
  render() {
    return (
      <div className='burger-paradise'>
          <div className='menu'>
              <Header/>
          </div>
          <Order/>
          <MenuAdmin/>
      </div>
    )
  }
}
