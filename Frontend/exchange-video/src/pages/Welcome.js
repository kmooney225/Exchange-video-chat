import React from "react";
import style from "../style/welcome.module.css"
import { Link } from "react-router-dom";

export default function Main() {
    return <div className={style.WelcomeContainer}>
        <h1> Exhange Video App!</h1>
            <div className={style.WelcomeInfo}> 
                <p> We are currently working to make a function 
                    video chatting app targeted for learning languages.
                    Thank you for your patiences :)
                </p>
            </div>
            <div className={style.actionBtn}>
                <Link 
                exact to='/get_username' 
                className="primaryBtn d-flex align-items-center mb-3">
                    New here? Get Your Username!
                    {/* <img src="" alt="" /> */}
                </Link>
                <Link>
                    Returning? Sign in
                </Link>
            </div>
    </div>;
}