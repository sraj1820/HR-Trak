import React, {useState, useEffect} from 'react';
import '../EmployeeListPage/employeeList.css'
import {useLocation} from 'react-router-dom'


function EmployeeDetails (props){
     const [employeeDetails, setEmployeeDetails] = useState('')
     const [status, setStatus] = useState('')
     const location = useLocation()

     useEffect(() =>{
       
         const urlPath = `/api/employee/${location.state.id}`
         fetch(urlPath)
         . then((resp) => resp.json())
         .then((resp) =>{
           setEmployeeDetails(resp.data)
         })
       },[location])


       
        // DELETE request using fetch with async/await
        async function deletePost() {
            const obj = await fetch(`/api/employee/${location.state.id}`, { method: 'DELETE' });
            setStatus('Delete successful');
          
        }
    
        

      
        return (
         
           <div>
             
             Name: {employeeDetails && employeeDetails.name}
             <br/>
             Gender: {employeeDetails.gender}
             <br/>
             Address: {employeeDetails.address}
             <br/>
             Contact: {employeeDetails.phone}
             {/* Department: {employeeDetails.department} */}
             <br/>

          
             <button type="button" class="btn btn-danger" href='/employee/all' onClick={deletePost}>
         Delete Employee
          </button>
            
              
           </div>
      )
        }
     


export default EmployeeDetails;