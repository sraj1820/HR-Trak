import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/card'
import NewEmployee from '../NewEmployeeForm/NewEmployee'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import '../EmployeeListPage/employeeList.css'


function EmployeeList(props) {

  const [employees, setEmployees] = useState([])



useEffect(() =>{
  const urlPath = '/api/employee/all';
  fetch(urlPath)
  . then((resp) => resp.json())
  .then((resp) =>{
    setEmployees(resp.data)
  })
},[])


  return (
  
  
    
  <div className='EmployeeList'>
     <NewEmployee addEmployeeToList={(employee) => {
        const allEmployees = [...employees, employee]
        setEmployees(allEmployees)
      }}/>

    <h1> All Employees </h1>
      
    {console.log(employees)}
    {employees.map((employee) =>{
      return(
      <div key={employee._id}>
        <Card style={{ width: '18rem' }}>
        <Card.Body ClassName = "Card-Body">
          <Card.Title>{employee.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{employee.email}</Card.Subtitle>
          <Card.Text>
           {employee.position} {employee.department}
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      </div>
      )
    })}
      
 </div>
  
  )}

export default EmployeeList;