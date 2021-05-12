import React from 'react'
import Astronauts from "../images/astronauts.jpg"
import { withRouter } from 'react-router-dom'

class Register extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.register(this.state)
    this.props.history.push('./employees')
  }

  render() {
    return (
      <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h1 className="pr-76 tracking-wide background-red-100 text-8xl font-serif text-center font-extrabold text-black"><span className="text-yellow-600">*</span>crew</h1>
              <h2 className="text-center mt-6 text-3xl font-extrabold text-gray-900">Create an account</h2>
              <p className="text-center mt-2 text-sm text-gray-600">
                <a href="/login" className="font-medium text-yellow-600 hover:text-yellow-500">
                  already have an account?
              </a>
              </p>
            </div>
            <div className="mt-8">
              <div>
                <div>
                  <div className="mt-1 grid grid-cols-3 gap-3">
                  </div>
                </div>
                <div className="mt-6 relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <form onSubmit={this.handleSubmit.bind(this)} className="space-y-6">
                  <div>
                    <label htmlFor="firstName" className="text-center block text-sm font-medium text-gray-700">
                      First Name
                  </label>
                    <div className="mt-1">
                      <input
                        id="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        name="firstName"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="text-center block text-sm font-medium text-gray-700">
                      Last Name
                  </label>
                    <div className="mt-1">
                      <input
                        id="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        name="lastName"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-center block text-sm font-medium text-gray-700">
                      Email address
                  </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="password" className="text-center block text-sm font-medium text-gray-700">
                      Password
                  </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Register
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="visible lg:block relative w-0 flex-1">
          <img
            className="filter brightness-75 absolute inset-0 h-full w-full object-cover object-center"
            // src={Astronauts}
            src={Astronauts}
          // src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181204162000-obama-bush-clinton-sept-2017.jpg"
          />
          <div>
            {/* <h1 className="tracking-wide background-red-100 absolute text-9xl font-serif text-left font-extrabold py-44 px-40 text-yellow-600">*crew</h1> */}
            {/* <h2 className="tracking-wide absolute text-3xl text-left font-light py-60 px-40 text-white">*everybody and everything, in one place</h2> */}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Register)