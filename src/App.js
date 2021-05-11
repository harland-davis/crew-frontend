import { Component } from 'react'
import './App.css';
import Employees from './components/Employees';
import Documents from './components/Documents'
import Login from './components/Login'
import Register from './components/Register'
import EmployeeDetail from './components/EmployeeDetail'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateEmployee from './components/CreateEmployee';

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

  createNewCrewMember = (employee) => {
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
          password: employee.password,
          title: employee.title,
          street: employee.street,
          city: employee.city,
          state: employee.state,
          zip: employee.zip,
          image: employee.image,
          phone: employee.phone,
          title: employee.title
      })
    })
      .then(response => response.json())
      .then(employee => this.setState({ employee }))
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
            <Route path="/employee/:id" component={EmployeeDetail} />
            <Route path="/create" render={() => <CreateEmployee createNewCrewMember={this.createNewCrewMember} />} />
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App;
