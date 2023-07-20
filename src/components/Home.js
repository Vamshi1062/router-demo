import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate=useNavigate()
    return (
        <Fragment>
            <h1>Home Page</h1>
            <button onClick={()=>navigate('order-summary',{replace:true})}>Place Order</button>

        </Fragment>
    )
}
