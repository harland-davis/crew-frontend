import React, { useEffect, useState } from 'react'
import './App.css';
import EmployeeCard from './components/EmployeeCard'


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
        <h1 className="text-yellow-800 font-bold text-4xl pt-8 pb-2 text-left align-bottom">Employees</h1>
        <EmployeeCard employees={employees} />
      </div>  
  )
}

export default App;
