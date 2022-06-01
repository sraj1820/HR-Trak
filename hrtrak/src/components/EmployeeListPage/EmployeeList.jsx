import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/card'
import NewEmployee from '../NewEmployeeForm/NewEmployee'




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

      
    {console.log(employees)}
    {employees.map((employee) =>{
      return(
      <div key={employee._id}>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{employee.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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