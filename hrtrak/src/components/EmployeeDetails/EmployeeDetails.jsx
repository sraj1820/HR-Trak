import React, {useState, useEffect} from 'react';
import '../EmployeeListPage/employeeList.css'
import {useLocation} from 'react-router-dom'

import {BrowserRouter, Routes, Route} from "react-router-dom"

function EmployeeDetails (props){
     const [employeeDetails, setEmployeeDetails] = useState('')
     const location = useLocation()
     console.log(location)
     console.log(props.prop)
     console.log(location.state.id)
     useEffect(() =>{
       
         const urlPath = `/api/employee/${location.state.id}`
         fetch(urlPath)
         . then((resp) => resp.json())
         .then((resp) =>{
           setEmployeeDetails(resp.data)
         })
       },[location])
      
        return (
         
           <div>
             {console.log(employeeDetails)}
             {employeeDetails && employeeDetails.name}
             {employeeDetails && employeeDetails.department.name}
            
              
           </div>
      )
        }
     


export default EmployeeDetails;