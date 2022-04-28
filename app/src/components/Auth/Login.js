import React from "react";



const Login =(props)=>{
    return (
        <div className="login-container">
            <nav className="login">
                <h2>Авторизация</h2>
                <p>Введите логин и пароль вашего аккаунта Github</p>
            <button
            className="github"
            onClick={()=> props.authenticate()}
            ></button>
            </nav>
        </div>
    )
}

export default Login