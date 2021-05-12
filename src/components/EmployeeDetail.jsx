import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import { PaperClipIcon } from '@heroicons/react/solid'
import W2 from "../images/w2.png"
import foodHandlers from "../images/foodHandlers.png"

export default function EmployeeDetail({ match }) {
  useEffect(() => {
    fetchEmployee()
    console.log(match)
  }, [])

  const [employeeDetail, setEmployeeDetail] = useState({});

  const fetchEmployee = async () => {
    const fetchEmployee = await fetch(
      `http://localhost:3000/employees/${match.params.id}`
    )
    const employeeDetail = await fetchEmployee.json()
    setEmployeeDetail(employeeDetail)

    console.log(employeeDetail)
  }

  return (
    <div>
      <Nav />
      <div className="py-9">
        <div className="shadow-md py-3 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-5">
            <h3 className="text-yellow-600 text-3xl leading-6 font-normal text-gray-900">{employeeDetail.first_name + " " + employeeDetail.last_name}</h3>
            <p className="mt-1 py-2 max-w-2xl text-sm text-gray-500">Crew member details</p>
          </div>
          <div className="mt-3 border-t border-gray-200">
            <dl className="divide-y divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">{employeeDetail.first_name + " " + employeeDetail.last_name}</span>
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      {/* Update */}
                </button>
                  </span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">{employeeDetail.phone}</span>
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      {/* Update */}
                </button>
                  </span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">{employeeDetail.email}</span>
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      {/* Update */}
                </button>
                  </span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Title</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">{employeeDetail.title}</span>
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      {/* Update */}
                </button>
                  </span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Street</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">
                    {employeeDetail.street}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      {/* Update */}
                </button>
                  </span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">City</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">{employeeDetail.city}</span>
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      {/* Update */}
                </button>
                  </span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">State</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">{employeeDetail.state}</span>
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      {/* Update */}
                </button>
                  </span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Zip</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">{employeeDetail.zip}</span>
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      {/* Update */}
                </button>
                  </span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <a href={foodHandlers}className="flex-grow underline pl-2" download>Food Handlers</a>
                      </div>
                      {/* <div className="ml-4 flex-shrink-0 flex space-x-4">
                        <button
                          type="button"
                          className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                          View
                    </button>
                        <span className="text-gray-300" aria-hidden="true">
                          |
                    </span>
                        <button
                          type="button"
                          className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                          Remove
                    </button>
                      </div> */}
                    </li>
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <a href={W2}className="flex-grow underline pl-2" download>W2</a>
                      </div>
                      {/* <div className="ml-4 flex-shrink-0 flex space-x-4">
                        <button
                          type="button"
                          className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                          View
                    </button>
                        <span className="text-gray-300" aria-hidden="true">
                          |
                    </span>
                        <button
                          type="button"
                          className="bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                          Remove
                    </button>
                      </div> */}
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
