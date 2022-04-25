import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <header className='top'>
                <div className='wrap'>
                    <div className='header-content'>

                        <div className='header-rating'>
                            <div className='header-rating_tag'>Рейтинг:</div>
                            <div className='header-rating_icon'>★★★★★</div>
                        </div>

                    

                    <div className='header-divider'></div>
                    <h1 className='font-effect-fire-animation'>Hot burger</h1>
                    <h3>
                        <span>
                            Быстрая доставка горячих
                            <span className='sub-header'>#Бургеров</span>
                        </span>
                    </h3>
                    </div>
                </div>
            </header>
        )
    }
}
