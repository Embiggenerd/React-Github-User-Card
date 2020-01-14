import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Axios from 'axios'
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard'

/**
 * The logic of the app goes like this: default user is my github. The form
 * has user state that it updates with onchange. On submit, it calls handleOnSubmit()
 * in this main component. This takes the form component's state.user, and sets this
 * componnet's state.user to that value. This triggers componentDidUpdate, which calls
 * the same two functions that componentDidUpdate called, except with now a different state.user
 * value.
 */
class App extends React.Component {
  constructor() {
    super()
    this.state = { user: "embiggenerd", data: "", followers: [] }
  }

  fetchUser = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${this.state.user}`)
      this.setState({ myData: data })

    } catch (e) { console.log(e) }
  }

  fetchFollowers = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      this.setState({ followers: data }, () => { console.log(this.state.followers) })

    } catch (e) { console.log(e) }
  }

  componentDidMount() {
    this.fetchUser()
    this.fetchFollowers()
  }

  componentDidUpdate(_, prevState) {
    if (this.state.user !== prevState.user) {
      this.fetchUser()
      this.fetchFollowers()
    }
  }

  handleOnSubmit = user => {
    this.setState({ user })
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
            return <FollowerCard key={f.id} {...f} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
