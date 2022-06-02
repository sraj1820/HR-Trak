import React, {useState, useEffect} from 'react';
import '../EmployeeListPage/employeeList.css'

function EmployeeDetails (props){
    const [employeeDetails, setEmployeeDetails] = useState([])

    useEffect(() =>{
        const urlPath = '/api/employee/:id';
        fetch(urlPath)
        . then((resp) => resp.json())
        .then((resp) =>{
          setEmployeeDetails(resp.data)
        })
      },[])


      return (
          <div> 

              
          </div>
      )
}

   