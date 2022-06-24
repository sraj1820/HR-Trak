import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/card'
import NewEmployee from '../NewEmployeeForm/NewEmployee'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import '../EmployeeListPage/employeeList.css'
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'



function EmployeeList(props) {

  const [employees, setEmployees] = useState([])
  const [status, setStatus] =useState('')



useEffect(() =>{
  const urlPath = '/api/employee/all';
  fetch(urlPath)
  . then((resp) => resp.json())
  .then((resp) =>{
    setEmployees(resp.data)
    console.log(resp.data)
  })
},[])











  return (
  
  
    
  <div className='EmployeeList'>
      <h1> All Employees </h1>
    <div className='Employee'>

  
    
    {console.log(employees)}
    
    {employees.map((employee) =>{
      return(
      <div  key={employee._id}>
        {console.log(employee._id)}
        <Card  style={{ width: '18rem', margin: 10, display: 'flex', }}>
        <Card.Img className = "Card-Body" variant="top" src="https://img.freepik.com/free-photo/elegant-businesswoman-standing-office-with-digital-tablet_52137-3746.jpg?size=626&ext=jpg&ga=GA1.2.703707115.1655513852" />
        <Card.Body className = "Card-Body">
          <Card.Title>{employee.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{employee.email}</Card.Subtitle>
          <Card.Text>
           <h6>Position:</h6> {employee.position}
           {/* <br/> <h6>Department:</h6>  {employee.department.name} */}
          </Card.Text>
          <Link to ={`/employee/${employee._id}`} state={{id: employee._id}}>Show Details </Link> <br/>
          {/* <Card.Link href="#">Delete</Card.Link> //button onchange callback function making fetch call to backend */}
        </Card.Body>
      </Card>
     

      </div>
      )
    })}
    </div>
      <br/>
      <br/>
      <br/>

      
       {/* <NewEmployee addEmployeeToList={(employee) => {
        const allEmployees = [...employees, employee]
        setEmployees(allEmployees) 
        
      }} /> */}
 </div>
  
  )}

export default EmployeeList;