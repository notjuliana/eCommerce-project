import React, { Component } from 'react'
import styled from 'styled-components'

export class Login extends Component {
    render() {
        return (
           <Form>
            <div className="container">
                <div className="wrapper">
                <h1> Login</h1>
                    <form action="/users/login" method="POST">
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        />
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        />
                    </div>
                    <button type="submit" className="btn">Login</button>
                    </form>
                    <p className="footer">
                    Don't have an account? <a href="/users/register">Register</a>
                    </p> 
                </div>
            </div>
         </Form> 
        )
    }
}

export const Form = styled.div `

.container {
    margin: 100px auto;
    position: relative;
	border-radius: 20px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 14px 28px -10px rgba(0, 0, 0, .1), 0 10px 10px -10px rgba(0, 0, 0, .02);
    width: 50%;
    color: #2D2D2D;
    font-size: 1.2em;
}

h1 {
    font-size: 35px;
    text-align: center;
}

label {
    float: left;
    margin-top: 10px;   
}

input {
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    font-size: 1em;
    width: 100%;
}
.wrapper {
    padding: 2em 4em;
   
}
.btn {
    background: linear-gradient(45deg,#2D2D2D,#666666);
    color: white;
    border-radius: 30px;
    padding: 1em 4em;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
    font-weight: bold;
    font-size: 1rem;
}
form-group {
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    color: black;
}
.footer {
    margin-top: 30px;
    a {
        color: #2D2D2D;
    }
}

`

export default Login
