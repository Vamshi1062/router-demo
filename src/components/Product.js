import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Product = () => {
    return (
        <>
        <div>
            <input type='search' placeholder='Search Products'/>

        </div>
        <nav>
            <Link to='featured'>Feautred</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet />
        </>
    )
}
//outlet-display output of nested components i.e feautured and new
//relative links wont start with forward slash