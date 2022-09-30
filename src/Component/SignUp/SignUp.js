import React from 'react'
import email from "./../../image/email.jpg";
import profile from "./../../image/a.png";
import pass from "./../../image/pass.png";
import { useState } from 'react';

function SignUp() {

    const [data, setData] = useState({
        user_name: "",
        Email_id: "",
        password: "",
        confirm_password: ""
    })

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        });
        console.log(data)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const senddata = {
            user_name: data.user_name,
            Email_id: data.Email_id,
            password: data.password,
            confirm_password: data.confirm_password
        }
        console.log(senddata)
    }

    return (

        <div className="main">
            <div>
                <h1>Create Account</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <img src={profile} alt="email" className="email" />
                        <input onChange={handleChange} type="text" name="user_name" placeholder="user name" className="name" value={data.user_name} />
                    </div>

                    <div className="second-input">
                        <img src={email} alt="pass" className="email" />
                        <input onChange={handleChange} type="text" name="Email_id" placeholder="Email Id" className="name" value={data.Email_id} />
                    </div>

                    <div className="second-input">
                        <img src={pass} alt="pass" className="email" />
                        <input onChange={handleChange} type="password" name="password" placeholder="password" className="name" value={data.password} />
                    </div>

                    <div className="second-input">
                        <img src={pass} alt="pass" className="email" />
                        <input onChange={handleChange} type="password" name="confirm_password" placeholder="confirm password" className="name" value={data.confirm_password} />
                    </div>

                    <div className="login-button">
                        <button className='but'>create your Account</button>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default SignUp       