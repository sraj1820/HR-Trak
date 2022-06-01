import { useState } from "react";
import ReactDOM from 'react-dom/client';
import {makePostRequest} from '../../utils/utils'


function AddEmployee(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    return (
        <div>
            <input
                value={name}
                onChange={
                    (e) => setName(e.target.value)
                }
            />
            <br />
            <input
                value={email}
                onChange={
                    (e) => setEmail(e.target.value)
                }
            />
            <br />
            <input
                value={phone}
                onChange={
                    (e) => setPhone(e.target.value)
                }
            />
            <br />
            <input
                value={address}
                onChange={
                    (e) => setAddress(e.target.value)
                }
            />
      
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
