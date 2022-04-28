import React, { Component } from 'react'
import Shipment from './Shipment';
import PropTypes from 'prop-types'

export default class Order extends Component {

  static propTypes={
    burgers:PropTypes.object,
    order:PropTypes.object,
    deleteFromOrder:PropTypes.func
  }

  renderOrder = (key) =>{
    const burger = this.props.burgers[key];
      const count = this.props.order[key];

      const isAvailable = burger && burger.status === 'available'

      if(!burger) return null;

      if(!isAvailable){
        return <li className='unavailable' key={key}>
          Извините, {burger ? burger.name : 'бургер'} временно не доступен
        </li>
      }
    return (
    <li key={key}>
      <span>
      <span>{count}</span>
      шт. {burger.name}
      <span> {count*burger.price} Br.</span>
      <button 
      className='cancellItem'
      onClick={()=>this.props.deleteFromOrder(key)}>&times;</button>
      </span>
    </li>)
  }

  render() {
debugger
    const orderIds = Object.keys(this.props.order)
   

    const total = orderIds.reduce((prevTotal,key)=>{
      const burger = this.props.burgers[key];
      const count = this.props.order[key];
      const isAvailable = burger && burger.status === 'available'
      if(isAvailable){
        return prevTotal + burger.price * count;
      }
      return prevTotal
    },0)

    return (
      <div className='order-wrap'>
          <h2>Ваш заказ</h2>
          <ul className='order'>{orderIds.map(this.renderOrder)}
          </ul>
         
        {total > 0 ? (
          <Shipment total={total}/>) : (
            <div className='nothingSelected'>
              Выберите блюда и добавьте к заказу
            </div>
          )}

      </div>
    )
  }
}
