const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmployeeSchema  = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone : {type: Number, required: true},
    address: {type: String, required: true},
    position: {type: String, required: true},
    gender: {type: String, required: true},
    department:  {type: Schema.Types.ObjectId, ref: 'Department'}
})