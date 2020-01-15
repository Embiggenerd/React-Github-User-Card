import React from 'react'

class FollowerCard extends React.Component {

    render() {
        const { login, html_url } = this.props
        return (
            <div>
                <a href={html_url} target="_blank" ><h3>{login}</h3></a>
            </div >
        )
    }
}

export default FollowerCard