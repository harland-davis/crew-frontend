import React, { useState, useEffect } from 'react'
import Employees from './Employees'
import Nav from './Nav'

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1>Employee Details</h1>
        <h2>{employeeDetail.first_name}</h2>
      </div>
    </div>
  )
}
