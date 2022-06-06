import { useState } from "react";

import {makePostRequest} from '../../utils/utils'



function AddDepartment(props) {
    const [name, setName] = useState('')
    const [manager, setManager] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')
  
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
            Manager:
            <input
                value={manager}
                onChange={
                    (e) => setManager(e.target.value)
                }
            />
            <br />
            Description:
            <input
                value={description}
                onChange={
                    (e) => setDescription(e.target.value)
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
    

            <button onClick={() => {
                const department = { name, manager, description, phone}
                makePostRequest('/api/department/create', department)
                    .then((resp) => {
                        if (resp.status === 200) {
                            props.addDepartmentToList(department)
                        } else {
                            // alert('Cant do it!')
                        }
                    })
                    .finally(() => {
                        setName('')
                        setManager('')
                        setDescription('')
                        setPhone('')
                       
                    })
            }} >Submit new Department </button>
        </div>
    )
}

export default AddDepartment;
