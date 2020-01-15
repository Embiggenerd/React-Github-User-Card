import React from 'react'

class UserCard extends React.Component {

    render() {
        const { login, location, bio, followers, following, html_url } = this.props
        return (
            <div>
                <a href={html_url} target="_blank">
                    <h3>{login}</h3>
                </a>
                <p>{bio}</p>
                <p>{location}</p>
                <p>followers: {followers}</p>
                <p>folllowing: {following}</p>
            </div>
        )
    }
}

export default UserCard