import { useState } from "react";

import {makePostRequest} from '../../utils/utils'

import { MDBInput, MDBBtn} from 'mdb-react-ui-kit';



function AddDepartment(props) {
    const [name, setName] = useState('')
    const [manager, setManager] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')
  
    return (
        <div>
            <MDBInput label='Name' id='typeText' type='text' 
                value={name}
                onChange={
                    (e) => setName(e.target.value)
                }
            />
            <br />
        
            <MDBInput label='Manager' id='typeText' type='text' 
                value={manager}
                onChange={
                    (e) => setManager(e.target.value)
                }
            />
            <br />

            <MDBInput label='Description' id='typeText' type='text' 
                value={description}
                onChange={
                    (e) => setDescription(e.target.value)
                }
            />
            <br />

            <MDBInput label='Phone' id='typeText' type='text' 
                value={phone}
                onChange={
                    (e) => setPhone(e.target.value)
                }
            />
            <br />
    

         
            <button type="button" class="btn btn-success" onClick={() => {
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
