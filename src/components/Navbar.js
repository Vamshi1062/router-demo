import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {
    const navStyleheading=({isActive})=>{
       return{
        fontWeight:isActive?'bold':'normal',
        textDecoration:isActive?'none':'underline'
       }
    }
    const auth=useAuth()

    return (
         <nav className='main'>
            <NavLink to='/' style={navStyleheading}>Home</NavLink>
            <NavLink to='/about' style={navStyleheading}>About</NavLink>
            <NavLink to='/products' style={navStyleheading}>Products</NavLink>
            <NavLink to='/users' style={navStyleheading}>Users</NavLink>
            <NavLink to='/profile' style={navStyleheading}>Profile</NavLink>
            {
               !auth.user&&<NavLink to='/login' style={navStyleheading}>Login</NavLink>
            }

         </nav>
    )
}

//NavLink knows whether or not it is the active link.we can use it to style 
//active link.Special about NavLink is by default it recieves active class  when the link is current route
//NavLink component will set a property called isActive which can be destructured 
//from the function parameter 
//NavLink component is specifically meant for building components like navbar ,
//breadcrumbs,set of tabs where you would like to highlight the current seleected item 
//and provide useful context with screen readers
//If you want to navigate two routes from other parts of the app Link should be the component use
// as wouldnt want the active class applied when it is not needed
