import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Axios from 'axios'
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard'

class App extends React.Component {
  constructor() {
    super()
    this.state = { user: "", myData: "", followers: []  }
  }

  // We are using an async here with destructuring. Short but could be confusing.
  componentDidMount() {
    const myUserGet = async () => {
      try {
        const { data } = await Axios.get('https://api.github.com/users/embiggenerd')
        this.setState({ myData: data })
      } catch (e) { console.log(e) }
    }
    const myFollowers = async () => {
      try {
        const { data } = await Axios.get('https://api.github.com/users/embiggenerd/followers')
        this.setState({ followers: data}, ()=>{console.log(this.state.followers)})
      }catch(e){console.log(e)}
    }
    myUserGet()
    myFollowers()
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
          <h1>React-Github-User-Card</h1>
          <UserForm handleOnSubmit={this.handleOnSubmit} handleOnChange={this.handleOnChange} user={this.state.user} />
          <UserCard {...this.state.myData} />
        </header>
        <div className="followers">
          {this.state.followers.map(f => {
            return <FollowerCard {...f}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
