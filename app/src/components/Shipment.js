import React, { Component } from "react"
import PropTypes from 'prop-types'

export default class Shipment extends Component{
  
  static propTypes={
      total:PropTypes.number
  }

    render(){
        const {total} = this.props
        const shipping = total > 0 && total < 500 ? 350 : 99;
        const shippingNeon = shipping === 99?(
            <span className="font-effect-neon total_wrap-cheap">{shipping} Br.</span>
        ): (
            <span>{shipping} Br.</span>
        )
        return (
            <div className='total'>
            <div className='total_wrap'>
                <div>
                    <div>Доставка:{total > 0 ? shippingNeon: null}</div>
                    <div className="total_wrap-free">
                        {total < 500 ? `Закажите еще на ${500-total} Br. для доставки за 99 Br.`:null }
                    </div>
                </div>
              <div className='total_wrap-final'>
                Итого: {total} Br.
              </div>
            </div>
          </div>
        )
    }
}