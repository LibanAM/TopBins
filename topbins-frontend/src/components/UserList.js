import React from 'react'
import User from './User'


const UserList = ({users}) => {

    const userComponents = users.map(user => {
        return <User 
            key={user.id}
            user={user}/>
    })

  return (
    <div className='user-list'>
        {userComponents}
    </div>
  )
}

export default UserList