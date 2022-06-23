import { useState } from "react";
import ReactDOM from 'react-dom/client';
import {makePostRequest} from '../../utils/utils'
import Form from 'react-bootstrap/Form'
import '../NewEmployeeForm/newEmployee.css'



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
            Name:
            <input
                value={name}
                onChange={
                    (e) => setName(e.target.value)
                }
            />
           
            Email:
            <input
                value={email}
                onChange={
                    (e) => setEmail(e.target.value)
                }
            />
            
            Phone:
            <input
                value={phone}
                onChange={
                    (e) => setPhone(e.target.value)
                }
            />
            
            Address:
            <input
                value={address}
                onChange={
                    (e) => setAddress(e.target.value)
                }
            />
           
            Position:
            <input
                value={position}
                onChange={
                    (e) => setPosition(e.target.value)
                }
            />
          

            Gender:
            <input
                value={gender}
                onChange={
                    (e) => setGender(e.target.value)
                }
            />
            

            Department:
            <input
                value={department}
                onChange={
                    (e) => setDepartment(e.target.value)
                }
            />
          

            <button onClick={() => {
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
