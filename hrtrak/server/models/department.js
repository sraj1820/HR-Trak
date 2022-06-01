const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DepartmentSchema = new Schema({
    name: {type: String,required: true},
    manager: {type: Schema.Types.ObjectId, ref: 'Department'},
    description: {type: String,required: true},
    phone: {type: Number, required: true},


})

module.exports = mongoose.model('Department', DepartmentSchema)