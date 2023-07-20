import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
    const auth=useAuth()
    const navigate=useNavigate()
    const handleLogout=()=>{
        auth.logout()
        navigate('/')
    }
    return (
        <div>
            {/* Profile Page */}
            Welcome {auth.user}
            <br/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
