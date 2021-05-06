import React from 'react'

export default function AddEmployee() {
  return (
    <div className="pt-12 pb-3 md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-yellow-600 text-2xl font-light leading-7 text-gray-900 sm:text-3xl sm:truncate">Crew Members</h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        <button
          type="button"
          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Add New Crew Member
        </button>
      </div>
    </div>

  )
}
