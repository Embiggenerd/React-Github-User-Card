import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = { user: "", myData: "" }
  }

  componentDidMount() {
    const myUserGet = async () => {
      try {

        const myDataRes = await Axios.get('https://api.github.com/users/embiggenerd')
        console.log('myDataRes', myDataRes.data.login)
        const { data } = myDataRes
        this.setState({ myData: data })

      } catch (e) { console.log(e) }
    }
    myUserGet()
  }

  handleOnChange = event => {
    this.setState({ user: event.target.value })
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
