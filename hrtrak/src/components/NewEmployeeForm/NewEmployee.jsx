import { useState } from "react";
import ReactDOM from 'react-dom/client';
import {makePostRequest} from '../../utils/utils'
import Form from 'react-bootstrap/Form'


function AddEmployee(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    return (
        <div>
            Name:
            <input
                value={name}
                onChange={
                    (e) => setName(e.target.value)
                }
            />
            <br />
            Email:
            <input
                value={email}
                onChange={
                    (e) => setEmail(e.target.value)
                }
            />
            <br />
            Phone:
            <input
                value={phone}
                onChange={
                    (e) => setPhone(e.target.value)
                }
            />
            <br />
            Address:
            <input
                value={address}
                onChange={
                    (e) => setAddress(e.target.value)
                }
            />
            <br/>
            <button onClick={() => {
                const employee = { name, email, phone, address }
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
                    })
            }} >Submit new Employee </button>
        </div>
    )
}

export default AddEmployee;
