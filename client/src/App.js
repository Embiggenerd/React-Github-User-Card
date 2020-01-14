import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = { user: "" }
  }

  handleOnChange = event => {
    this.setState({ user: event.target.value }, () => console.log(this.state.user))
  }

  handleOnSubmit = event => {
    console.log('handleOnSbumit invoked')
    event.preventDefault()
    const submitUserGet = async () => {
      try {
        const userData = await Axios.get(`https://api.github.com/users/${this.state.user}`)
        console.log('userData', userData)
      } catch (e) { console.log(e) }
    }
    submitUserGet()
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <UserForm handleOnSubmit={this.handleOnSubmit} handleOnChange={this.handleOnChange} user={this.state.user} />
        </header>
      </div>
    );
  }
}

export default App;
