import React, { useState } from "react";
import style from "../style/phone.module.css"
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input"

export default function Phone() {
    const [value, setValue] = useState();
    return (
        <div className={style.phoneContainer}>
            <h1>Enter your phone number</h1>
            <PhoneInput />
            <p>By signing up, you're agreeing to out 
                <span>Terms of Service and Privacy Policy. </span>
                Thanks!
            </p>
        </div>
    )
}