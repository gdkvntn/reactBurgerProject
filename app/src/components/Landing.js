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
        this.setState({display:!display})
    }

    getTitle=(restaurant)=>{
        let {title,url} =restaurant
        this.setState({
            title:title,
            url:url,
            display:false})
        
    }
    render(){
       return (
           <div className="restaurant_select">
               <div className="restaurant_select_top">
                   <div onClick={this.displayList} className="restaurant_select_top-header font-effect-outline">
                       {this.state.title? this.state.title :'Выберите ресторан'}
                   </div>
                   <div className="arrow_picker">
                        <div className="arrow_picker-up"></div>
                        <div className="arrow_picker-down"></div>
                   </div>
               </div>

               {this.state.display?<div className="restaurant_select-bottom">
                    <ul>
                        {restaurants.map(restaurant=>{
                            return <li onClick={()=>this.getTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>
                        })}
                    </ul>
               </div>:null}
               {this.state.title && !this.state.display?<button onClick='this.goToRestaurant'>Перейти в ресторан</button>:null}
           </div>
       )
    }
}

export default Landing