import React, { Component } from 'react'
import styled from 'styled-components'

export class Register extends Component {
    render() {
        return (
            <Form>
            <div className = "container">
                <div className= "wrapper">
                    <h1 class= "title">
                         Register
                    </h1>
                    
                    <form action= "/users/register" method= "POST">
                        <div>
                        <label for= "name">Name:</label>
                        <input
                            type= "name"
                            id= "name"
                            name= "name"
                            placeholder= "Enter Name"
                            
                        />
                        </div>
                        <div >
                        <label for= "email">Email:</label>
                        <input
                            type= "email"
                            id= "email"
                            name= "email"
                            placeholder= "Enter Email"
                            
                        />
                        </div>
                        <div >
                        <label for= "password">Password:</label>
                        <input
                            type= "password"
                            id= "password"
                            name= "password"
                            placeholder= "Create Password"
                            
                        />
                        </div>
                        <div >
                        <label for= "password2">Confirm Password:</label>
                        <input
                            type= "password"
                            id= "password2"
                            name= "password2"
                            placeholder= "Confirm Password"
                            
                        />
                        </div>
                        <button type="submit" className= "btn">
                        Register
                        </button>
                    </form>
                    <p class="footer">Have An Account? <a href="/users/login">Login</a></p>
                    </div>
                </div>
            </Form>
        )
    }
}
const Form = styled.div `
.container {
    margin: 100px auto;
    position: relative;
	border-radius: 20px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 14px 28px -10px rgba(0, 0, 0, .1), 0 10px 10px -10px rgba(0, 0, 0, .02);
    width: 50%;
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
}
.footer {
    margin-top: 30px;
    a {
        color: #2D2D2D;
    }
}
`

export default Register
