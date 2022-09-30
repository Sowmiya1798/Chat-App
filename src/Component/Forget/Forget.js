import React from 'react'
import email from "./../../image/email.jpg";
import pass from "./../../image/pass.png";
import { useState } from 'react';

function Forget() {

    const [data, setData] = useState({
        user_name: "",
        password: ""
    })

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const senddata = { 
            user_name: data.user_name,
            password: data.password
        }
        console.log(senddata)
    }

    return (

        <div className="main">

            <div>
                <h1>Reset Password</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <img src={email} alt="email" className="email" />
                        <input onChange={handleChange} type="text" name="user_name" placeholder="user name" className="name" value={data.user_name} />
                    </div>

                    <div className="second-input">
                        <img src={pass} alt="pass" className="email" />
                        <input onChange={handleChange} type="password" name="password" placeholder="New password" className="name" value={data.password} />
                    </div>

                    <div className="login-button">
                        <button className='but'>Change Password</button>
                    </div>
                </form>

            </div>
        </div>

       
    )
}

export default Forget