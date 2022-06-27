import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/card'
import '../EmployeeListPage/employeeList.css'
import NewDepartment from '../NewDepartment/NewDepartmentForm'
import '../Department/departmentList.css'


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
       <h1> Departments </h1>
    <div className = 'Department'>

 
      
  
    {departments.map((department) =>{
      return(
      <div key={department._id}>
        <Card style={{ width: '18rem' }}>
        <Card.Body ClassName = "Card-Body">
          <Card.Title>{department.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
           <h6>Description:</h6> {department.description} <br/> 
           {/* <h6>Manager:</h6> {department.manager.name} */}
          </Card.Text>
      
          <button type="button" class="btn btn-danger" > Delete </button>
        </Card.Body>
      </Card>
      </div>
      )
    })}
    <br/>
    <br/>
    <br/>
    </div>
        <NewDepartment addDepartmenToList={(department) => {
        const allDepartments = [...departments, department]
        setDepartments(allDepartments)
      }}/>
 </div>
  
  )}

export default DepartmentList;