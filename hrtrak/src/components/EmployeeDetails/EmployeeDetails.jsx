import React, {useState, useEffect} from 'react';
import '../EmployeeListPage/employeeList.css'
import {useLocation} from 'react-router-dom'


function EmployeeDetails (props){
     const [employeeDetails, setEmployeeDetails] = useState('')
     const [status, setStatus] = useState('')
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


       
        // DELETE request using fetch with async/await
        async function deletePost() {
            const obj = await fetch(`/api/employee/${location.state.id}`, { method: 'DELETE' });
            setStatus('Delete successful');
            console.log(obj)
        }
    
        

      
        return (
         
           <div>
             {console.log(employeeDetails)}
             {employeeDetails && employeeDetails.name}
             {/* {employeeDetails && employeeDetails.department.name} */}
             <button onClick={deletePost}>
         Delete Employee
          </button>
            
              
           </div>
      )
        }
     


export default EmployeeDetails;