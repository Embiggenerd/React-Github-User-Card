import React from 'react'

class UserCard extends React.Component {
    
    render() {
        const { login, location, bio, followers, following } = this.props
        return (
            <div>
                <h3>{login}</h3>
                <p>{bio}</p>
                <p>{location}</p>
                <p>followers: {followers}</p>
                <p>folllowing: {following}</p>
            </div>
        )
    }
}

export default UserCard