import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const[searchParams,setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get('filter')==='active'
    return (
        <div>
            {/* <h2>User1</h2>
            <h2>User2</h2>
            <h2>User3</h2>
            <Outlet/> */}

            <button onClick={()=>{setSearchParams({filter:'active'})}}>Active Users</button>
            <button onClick={()=>{setSearchParams({})}}>Reset Filter</button>
            {
                showActiveUsers?<h2>Active Users</h2>:<h2>All Users</h2>
            }

        </div>
    )
}
