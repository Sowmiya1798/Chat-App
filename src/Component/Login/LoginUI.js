import './LoginUI.css';
import profile from "./../../image/a.png";
import email from "./../../image/email.jpg";
import pass from "./../../image/pass.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LoginUI() {

    const navigate = useNavigate()

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
                <div className="imgs">
                    <div className="container-image">
                        <img src={profile} alt="profile" className="profile" />
                    </div>
                </div>

                <div>
                    <h1>Login Page</h1>
                    <form onSubmit={submitHandler}>
                        <div>
                            <img src={email} alt="email" className="email" />
                            <input onChange={handleChange} type="text" name="user_name" placeholder="user name" className="name" value={data.user_name} />
                        </div>

                        <div className="second-input">
                            <img src={pass} alt="pass" className="email" />
                            <input onChange={handleChange} type="password" name="password" placeholder="password" className="name" value={data.password} />
                        </div>

                        <div className="login-button">
                           <button onClick={() => navigate('/chat')} className='but'>Login</button>
                        </div>
                    </form>

                    <p className="link">
                        <a href="reset">Forgot password ?</a>&nbsp; or &nbsp;<a href="account">Sign Up</a>
                    </p>


                </div>
            </div>


        </div>
    );
}

export default LoginUI;