
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import './Login_page.css';
import logo from './Images/logo2.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
var userName = '' // to pass it to the videos page 

export function getUsername() {
    return userName
}

export default function Login_page() {

    let navigate = useNavigate()

    // state functions to change the data on the screen 
    const [enteredUName, setEnteredUName] = useState('')
    const [enteredPasswd, setEnteredPasswd] = useState('')

    // to make the user know what is the reason which he doesnt 
    // get the output 
    const [isUnameValid, setIsUnameValid] = useState(true)
    const [isPasswdValid, setIsPasswdValid] = useState(true)

    function UnameChangeHandler(event) {
        // to change the color from red to black in case 
        // of empty input
        if (event.target.value.trim().length > 0) {
            setIsUnameValid(true)
        }

        setEnteredUName(event.target.value)
    }

    function PasswdChangeHandler(event) {
        // to change the color from red to black in case 
        // of empty input
        if (event.target.value.trim().length > 0) {
            setIsPasswdValid(true)
        }

        setEnteredPasswd(event.target.value)
    }

    function submitHandler(event) {
        //to prevent the refreshment of that page after submitting 
        event.preventDefault()

        // form validation which means its prevents the page 
        // from adding a new product if no input is given 
        // otherwise a blank box is shown as output 
        if (enteredUName.trim().length === 0) {
            setIsUnameValid(false)
            alert("Enter email ID")
            return;
        }

        if (enteredPasswd.trim().length === 0) {
            setIsPasswdValid(false)
            alert("Enter password")
            return;
        }

        //store the data in resp. variables from the executed funcs from the events 
        const Credentials = {
            username: enteredUName,
            password: enteredPasswd,
        }
        userName = enteredUName //for the getUsername function which is passed to videos page 

        console.log(Credentials)

        // reset the values to empty string 
        setEnteredUName('')
        setEnteredPasswd('')
        navigate('/login/videos')

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <img src={logo} className='image' />
                <div className='whole-box'>
                    <div className='inner-box'>
                        <h1>Sign-In</h1>
                        <div className={`credentials-email ${!isUnameValid ? 'invalid' : ''}`}>
                            <label>Email or mobile phone number</label>
                            <input type="email" onChange={UnameChangeHandler} value={enteredUName} ></input>
                        </div>

                        <div className={`credentials-passwd ${!isPasswdValid ? 'invalid' : ''}`}>
                            <div className='password'>
                                <label>Password</label>
                                <a href='#'>Forgot your password?</a>
                            </div>
                            <input type="password" onChange={PasswdChangeHandler} value={enteredPasswd} ></input>
                        </div>
                        <button type='submit'>Sign-In</button>

                        <p>By continuing, you agree to the Amazon
                            <a > Conditions of Use and Privacy Notice.</a>
                        </p>
                        <div className='keep-signed'>
                            <input type="checkbox"></input>
                            <span>Keep me signed in. </span>
                        </div>

                        <div className='lower-layer'>
                            <h5>New to Amazon?</h5>
                            <button >Create your Amazon account</button>
                        </div>
                    </div>
                </div>
                <div className='icons'>
                    <a href='https://www.instagram.com/sabarivasan_20/' target="_blank" rel="noopener noreferrer"><BsInstagram size={'35px'} className='icon' color={'black'} /></a>
                    <a href='https://github.com/Sabarivasan-Velayutham' target="_blank" rel="noopener noreferrer"><BsGithub size={'35px'} className='icon' color={'black'} /></a>
                    <a href='https://www.linkedin.com/in/sabarivasan-velayutham-06a696210/
' target="_blank" rel="noopener noreferrer"><BsLinkedin size={'35px'} className='icon' color={'black'} /></a>
                </div>
            </div>
        </form>

    )
} 
