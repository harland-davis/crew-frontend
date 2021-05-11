import { Component } from 'react'
import Nav from './Nav'

export default class CreateEmployee extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
    title: "",
    street: "",
    city: "",
    zip: "",
    state: "",
    phone:""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createNewCrewMember(this.state)
  }

  render() {

    return (
      <div>
        <Nav />
        <div className="py-9">
          <div className="shadow-xl py-6 bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg text-yellow-600 font-medium leading-6 text-gray-900">Add New Crew Member</h3>
                    <p className="mt-1 text-sm text-gray-600">Please enter your new crew member details.</p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form onSubmit={this.handleSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                              First name
                      </label>
                            <input
                              name="firstName"
                              type="text"
                              value={this.state.firstName}
                              onChange={this.handleChange}
                              className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                              Last name
                      </label>
                            <input
                              type="text"
                              name="lastName"
                              value={this.state.lastName}
                              onChange={this.handleChange}
                              autoComplete="family-name"
                              className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                              Password
                      </label>
                            <input
                              type="text"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                              autoComplete="family-name"
                              className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                              Email address
                      </label>
                            <input
                              type="text"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                              autoComplete="email"
                              className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                              Phone number
                      </label>
                            <input
                              type="text"
                              name="phone"
                              value={this.state.phone}
                              onChange={this.handleChange}
                              autoComplete="phone"
                              className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                              Title
                      </label>
                            <select
                              id="title"
                              name="title"
                              value={this.state.title}
                              onChange={this.handleChange}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 sm:text-sm"
                            >
                              <option>Server</option>
                              <option>Backwait</option>
                              <option>Host</option>
                              <option>Manager</option>
                            </select>
                          </div>

                          <div className="col-span-6">
                            <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                              Profile picture
                      </label>
                            <input
                              type="text"
                              name="image"
                              value={this.state.image}
                              onChange={this.handleChange}
                              className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6">
                            <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                              Street address
                      </label>
                            <input
                              type="text"
                              name="street"
                              value={this.state.street}
                              onChange={this.handleChange}
                              autoComplete="street-address"
                              className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                              City
                      </label>
                            <input
                              type="text"
                              name="city"
                              value={this.state.city}
                              onChange={this.handleChange}
                              className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                              State / Province
                      </label>
                            <input
                              type="text"
                              name="state"
                              value={this.state.state}
                              onChange={this.handleChange}
                              className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">
                              ZIP
                      </label>
                            <input
                              type="text"
                              name="zip"
                              id="zip"
                              value={this.state.zip}
                              onChange={this.handleChange}
                              autoComplete="postal-code"
                              className="mt-1 focus:ring-yellow-600 focus:border-yellow-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                          Save
                  </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}