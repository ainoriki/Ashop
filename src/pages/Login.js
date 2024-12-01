import {auth} from '../firebase'
import React from 'react'
import { useState, useEffect } from 'react'
import {signInWithEmailAndPassword } from 'firebase/auth'
import './style.css'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice' 


const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[password, setPassword] = useState("")
    const[email, setEmail] = useState("")
    const[error, setError] = useState("")

    
    function login(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user)
            dispatch(setUser({
                email:user.email,
                id: user.id,
                token:user.token,
            }))
            // setEmail("")
            // setPassword("")
            // setError("")
            navigate('/success')
        })
        .catch((error) => {
            console.log(error)
            navigate('/register')
        })
    }


    return ( 

        <div className="auth">
        <h1 className="auth-title">Log in</h1>
        <form>
            <div className="auth-block">
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter email' type="email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter password' type="password" />
            <button className="btn btn-primary" onClick={login}>Log In</button>
            </div>
        </form>     

        <div>
        
        </div>
       
        </div>
     );
}
 
export default Login;