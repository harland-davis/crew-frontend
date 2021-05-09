import { Component } from 'react'
import './App.css';
import Employees from './components/Employees';
import Documents from './components/Documents'
import Login from './components/Login'
import Register from './components/Register'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    employee: {},
    error: "",
    test: false
  }

  register = (employee) => {
    fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          first_name: employee.firstName,
          last_name: employee.lastName,
          email: employee.email,
          password: employee.password
      })
    })
      .then(response => response.json())
      .then(employee => this.setState({ employee }))
  }

  login = (email, password) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
          email,
          password
      })
    })
      .then(response => response.json())
      .then(result => {
        if (result.token){
          this.setState({test: true })
          localStorage.setItem('token', result.token)
        this.setState({
          employee: result.employee
        })
      } else {
        this.setState({
          error: result.error
        })
      }
      })
  }



  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route exact path="/login" render={() => <Login login={this.login} test={this.state.test} error={this.state.error} />} />
            <Route exact path="/" render={() => <Register register={this.register} />} />
            <Route exact path="/employees" component={Employees} />
            <Route path="/documents" component={Documents} />
            <Route path="/my Profile" />
          </div>4
        </Switch>
      </Router>
    )
  }
}

export default App;
