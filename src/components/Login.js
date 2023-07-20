import React, { useState } from 'react'
import { useAuth } from './auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Login = () => {
    const[user,setUser]=useState('')
    const auth=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    const redirectPath=location.state?.path||'/'

    useEffect(() => {
        if (auth.user) {
          navigate('/', { replace: true });
        }
      }, [auth, navigate]);
    
    const handleLogin=()=>{
        auth.login(user)
       // navigate('/',{replace:true})
       navigate(redirectPath,{replace:true})
    }
    return (
        <div>
            <label>Username
                <input type='text' onChange={e=>setUser(e.target.value)}/>
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
