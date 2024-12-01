import {auth} from '../firebase'
import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './style.css'
import { setUser } from '../store/slices/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Register = () => {

    const dispatch = useDispatch()
    const[password, setPassword] = useState("")
    const[email, setEmail] = useState("")
    const[error, setError] = useState("")
    const[copyPassword, setCopyPassword] = useState("")
    const navigate = useNavigate()
    
    function register(e){
        e.preventDefault();

        if(password !== copyPassword){
            setError("error")
            return 
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user)
            dispatch(setUser({
                email:user.email,
                id: user.id,
                token:user.token,
            }))
            // setEmail("")
            // setPassword("")
            // setCopyPassword("")
            // setError("")
            navigate('/home')

        })
        .catch((error) => {
            console.log(error)
        })
    }


    return ( 

        <div className="auth">
        
        <h1 className="auth-title">Create New Account</h1>
        <form>
            <div className="auth-block">
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter email' type="email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter password' type="password" />
            <input value={copyPassword} onChange={(e) => setCopyPassword(e.target.value)} placeholder='enter password again' type="password" />
            <button type="button" className="btn btn-primary" onClick={register}>Sign In</button>
            </div>
        </form> 
        </div>
        
     );
}
 
export default Register;