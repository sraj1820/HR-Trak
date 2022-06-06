import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/card'
import NewEmployee from '../NewEmployeeForm/NewEmployee'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import '../EmployeeListPage/employeeList.css'
import NewDepartment from '../NewDepartment/NewDepartmentForm'


function DepartmentList(props) {

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
  
  
    
  <div className='DepartmentList'>
      <NewDepartment addDepartmenToList={(department) => {
        const allDepartments = [...departments, department]
        setDepartments(allDepartments)
      }}/>

    <h1> Departments </h1>
      
    {console.log(departments)}
    {departments.map((department) =>{
      return(
      <div key={department._id}>
        <Card style={{ width: '18rem' }}>
        <Card.Body ClassName = "Card-Body">
          <Card.Title>{department.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
           <h6>Description:</h6> {department.description} <br/> <h6>Manager:</h6> {department.manager.name}
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

export default DepartmentList;