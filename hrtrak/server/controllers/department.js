const Department = require('../models/department')
const Employee = require('../models/employee')


async function allDepartments(req,res) {
    try{
        const allDepartments = await Department.find({}).populate('manager')
     
        res.send({
            status:200,
            data:allDepartments
        })
    } catch (err) {
        res.status(500).send({
            status:500,
            data: err
        })
    }
    
}

async function createDepartment(req,res) {
    
    const findEmployee =await Employee.findOne({name: req.body.manager})
  
    const newDepartment = {
        ...req.body,
        manager:findEmployee._id
    }
    console.log(newDepartment)
    try{
        await Department.create(newDepartment)

        res.send({
            status:200,
            data: 'Department endpoint hit'
        })
    } catch (err) {
        res.status(500).send({
            status:500,
            data: err
        })
    }
}

module.exports = {
    allDepartments,
    create: createDepartment
}