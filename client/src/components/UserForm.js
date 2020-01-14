import React from 'react'

class UserForm extends React.Component {
    constructor() {
        super()
        this.state = { user: "" }
    }

    handleOnChange = event => {
        this.setState({ user: event.target.value })
    }
    
    handleOnSubmit = event => {
        event.preventDefault()
        this.props.handleOnSubmit(this.state.user)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" onChange={this.handleOnChange} placeholder="get user's followers" value={this.state.user} />
                </form>
            </div>
        )
    }

}

export default UserForm