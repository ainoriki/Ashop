import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


const Success = () => {
    const [authUser, setAuthUser] = useState();
    const navigate = useNavigate()
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(true)
                console.log('user is logged')
            }
            else{
                setAuthUser(null)
            }
        })

        return()=> listen();
    }, [])


    const handleOut = () => {
        navigate('/home')
    }
    return ( 
        <>
            {authUser ? (
                <p className="auth-title">User is logged</p>
            ) : (
                <p>User is not logged</p>
            )}
            <button type="button" class="auth-btn" onClick={handleOut}>Home</button>
        </>
     );
}
 
export default Success;