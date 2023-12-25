import "./register.scss";
import {useRef, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigate();

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);

        try {
            await axios.post("auth/register", { email: email, username: username, password: password });
            navigation("/login");
        } catch (err) {
            console.error(err);
        }

    };

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <Link to="/">
                        <img
                            className="logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                            alt=""
                        />
                    </Link>
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                    {
                        !email ? (
                            <div className="input">
                                <input type="email" placeholder="Email Address" ref={emailRef} />
                                <button className="registerButton" onClick={handleStart}>
                                    Get Started
                                </button>
                            </div>
                        ) : (
                            <form className="input">
                                <input type="text" placeholder="Username" ref={usernameRef}/>
                                <input type="password" placeholder="Password" ref={passwordRef}/>
                                <button className="registerButton" onClick={handleFinish}>
                                    Start
                                </button>
                            </form>
                        )
                    }
            </div>
        </div>
    );
};

export default Register;
