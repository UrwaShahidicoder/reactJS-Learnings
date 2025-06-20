import React from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user} = useContext (userContext)
    if (!user) return <div>Please login</div>
    return <div>Welcome {user.username}</div>
}

export default Profile