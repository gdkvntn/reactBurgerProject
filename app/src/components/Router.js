import React from "react"

import {Route,BrowserRouter, Routes} from "react-router-dom"
import App from "./App"
import Landing from "./Landing"
import NotFound from "./NotFound"

const Router =(props)=>{
   
return(
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route path="/restaurant/:restaurantId" element={<App/>}/>
        <Route path="*"element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>
)
}
export default Router