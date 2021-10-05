import React from 'react'
import { useHistory } from 'react-router';
import { constantarray } from '../Constant';

const Login = () => {
    let history = useHistory();
    const [details, setDetails] = React.useState({
        email: "",
        password: ""
    });
    const [error, setError] = React.useState("");
    console.log(details);
    const submitDetails = () => {
        let email = constantarray.users.find(e => e.email === details.email);
        if (!email) {
            setError("email");
            console.log(error);
        }
        else if (!details.password) {
            setError("password");
        }
        else if (email.password === details.password) {
            history.push("/local-csv");
            localStorage.setItem("email", details.email);
        }
        else {
            alert("false");
            setError("password");
        }
    }


    return (
        <div className="login row">
            <div className="login-leftside col-lg-5">
                

            </div>
            <div className="login-rightside col-lg-6">
                <div className="sign-in">
                    <p>already a member?</p>
                    <button type="submit">Sign In</button>
                </div>
                <div className="login-form">
                    <h4>Lets Get Started !</h4>
                    <div className="email">
                        <label>Username or Email</label>
                        <input
                            type="text"
                            placeholder="abc@gmail.com"
                            className={error === "email" ? "input-red" : "input-normal"}
                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                        ></input>
                        {error === "email" ? <p className="validate-email">please enter valid Email address</p> : ""}
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input
                            type="text"
                            placeholder="abc22"
                            className={error === "password" ? "input-red" : "input-normal"}
                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
                        ></input>
                        {error === "password" ? <p className="validate-email">please enter valid Password</p> : ""}
                    </div>
                    <button type="submit" className="login-button" onClick={() => submitDetails()}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Login;