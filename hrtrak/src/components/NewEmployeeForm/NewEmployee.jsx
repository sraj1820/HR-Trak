import { useState } from "react";
import ReactDOM from 'react-dom/client';
import {makePostRequest} from '../../utils/utils'
import Form from 'react-bootstrap/Form'
import '../NewEmployeeForm/newEmployee.css'
import { MDBInput, MDBBtn} from 'mdb-react-ui-kit';



function AddEmployee(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [position, setPosition]= useState('')
    const [gender, setGender] = useState('')
    const [department, setDepartment] = useState('')




    return (

       
        <div>
             <h1>Add an Employee </h1>
             <h4> Please make sure the department used exists. If it does not, please create one first. </h4>
            <MDBInput label='Name' id='typeText' type='text' 
                value={name}
                onChange={
                    (e) => setName(e.target.value)
                }
            />
           
            <MDBInput label='Email' id='typeEmail' type='email' 
                value={email}
                onChange={
                    (e) => setEmail(e.target.value)
                }
            />
            
    
            <MDBInput label='Phone' id='typePhone' type='tel' 
                value={phone}
                onChange={
                    (e) => setPhone(e.target.value)
                }
            />
            
            <MDBInput label='Address' id='typeText' type='text' 
                value={address}
                onChange={
                    (e) => setAddress(e.target.value)
                }
            />
           
            <MDBInput label='Position' id='typeText' type='text' 
                value={position}
                onChange={
                    (e) => setPosition(e.target.value)
                }
            />
          

            <MDBInput label='Gender' id='typeText' type='text' 
                value={gender}
                onChange={
                    (e) => setGender(e.target.value)
                }
            />
            

    
            <MDBInput label='Department' id='typeText' type='text' 
                value={department}
                onChange={
                    (e) => setDepartment(e.target.value)
                }
            />
          

            <button type="button" class="btn btn-success" onClick={() => {
                const employee = { name, email, phone, address, position, gender, department }
                makePostRequest('/api/employee/create', employee)
                    .then((resp) => {
                        if (resp.status === 200) {
                            props.addEmployeeToList(employee)
                        } else {
                            // alert('Cant do it!')
                        }
                    })
                    .finally(() => {
                        setName('')
                        setEmail('')
                        setPhone('')
                        setAddress('')
                        setPosition('')
                        setGender('')
                        setDepartment('')
                    })
            }} >Submit new Employee </button>
        </div>
    )
}

export default AddEmployee;
