import React, {useState, useEffect} from 'react';
import '../EmployeeListPage/employeeList.css'
import {useLocation} from 'react-router-dom'

import {BrowserRouter, Routes, Route} from "react-router-dom"

function EmployeeDetails (props){
     const [employeeDetails, setEmployeeDetails] = useState([])
     const location = useLocation()
     console.log(location)
     console.log(props.prop)
     useEffect(() =>{
       
         const urlPath = `/api/employee/${location.state}`;
         fetch(urlPath)
         . then((resp) => resp.json())
         .then((resp) =>{
           setEmployeeDetails(resp.data)
           console.log(employeeDetails)
         })
       },[])

      //  employeeDetails.map(employee =>{
      //   return (
         
      //      <div key={employee._id}>
      //        {employee.name}
      //        {employee.department.name}
            
              
      //      </div>
      // )
       return (
        <div> jsk </div>
       )
      // })
     
}

export default EmployeeDetails;