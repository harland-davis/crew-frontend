import React, { useEffect, useState } from 'react'
import './App.css';
import EmployeeCard from './components/EmployeeCard'
import AddEmployee from './components/AddEmployee';
import Nav from './components/Nav'


function App() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then(response => response.json())
      .then(data => {
        setEmployees(data)
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Nav />
      <AddEmployee />
      <EmployeeCard employees={employees} />
    </div>
  )
}



export default App;
