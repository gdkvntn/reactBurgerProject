import React, { Component } from "react";
import restaurants from '../sample-restaurants'

class Landing extends Component{
    state = {
        display:false,
        title:'',
        url:''
    }


    displayList=()=>{
        let {display} = this.state;
    }
    render(){
       return (
           <div className="restaurant_select">
               <div className="restaurant_select_top">
                   <div onClick={this.displayList} className="restaurant_select_top-header font-effect-outline">
                        Выберите ресторан
                   </div>
                   <div className="arrow_picker">
                        <div className="arrow_picker-up"></div>
                        <div className="arrow_picker-down"></div>
                   </div>
               </div>

               <div className="restaurant_select-bottom">
                    <ul>
                        {restaurants.map(restaurant=>{
                            return <li key={restaurant.id}>{restaurant.title}</li>
                        })}
                    </ul>
               </div>
               <button>Перейти в ресторан</button>
           </div>
       )
    }
}

export default Landing