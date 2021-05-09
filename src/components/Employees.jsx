// import { findAllByTestId } from '@testing-library/dom'
import React, { useState, useEffect } from 'react'
import AddEmployee from './AddEmployee'
import EmployeeCard from './EmployeeCard'
import Nav from './Nav'

function Employees() {
  
  const [employees, setEmployees] = useState([])
  // const [modalVisibility, setModalVisibility] = useState(false);

  // const showEmployee = (employee) => {
  //   setModalVisibility(true)
  //   console.log(employee, modalVisibility)
  // }

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then(response => response.json())
      .then(data => {
        setEmployees(data)
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <div>
      <Nav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AddEmployee />
        <EmployeeCard employees={employees} />
      </div>
    </div>
  )
}

export default Employees;
