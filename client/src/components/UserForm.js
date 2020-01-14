import React from 'react'

class UserForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleOnSubmit}>
                    <input type="text" onChange={this.props.handleOnChange} placeholder="get user's followers" value={this.props.user} />
                </form>
            </div>
        )
    }

}

export default UserForm