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
    console.log(resp.data)
  })
},[])

const [departments, setDepartments] = useState([])



useEffect(() =>{
  const urlPath = '/api/department/all';
  fetch(urlPath)
  . then((resp) => resp.json())
  .then((resp) =>{
    setDepartments(resp.data)
  })
},[])



  return (
  
  
    
  <div className='EmployeeList'>
    

    <h1> All Employees </h1>
      
    {console.log(employees)}
    {employees.map((employee) =>{
      return(
      <div key={employee._id}>
        {console.log(employee._id)}
        <Card style={{ width: '18rem' }}>
        <Card.Body className = "Card-Body">
          <Card.Title>{employee.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{employee.email}</Card.Subtitle>
          <Card.Text>
           <h6>Position:</h6> {employee.position}
           <br/> <h6>Department:</h6>  {employee.department.name}
          </Card.Text>
          <Card.Link href="/employee/{employee._id}">Show Details</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
      </div>
      )
    })}
       <NewEmployee addEmployeeToList={(employee) => {
        const allEmployees = [...employees, employee]
        setEmployees(allEmployees) 
      }}  departments = {departments}/>
 </div>
  
  )}

export default EmployeeList;