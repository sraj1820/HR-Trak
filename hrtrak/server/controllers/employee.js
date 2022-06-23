const Employee = require('../models/employee')
const Department = require('../models/department')

async function index(req,res) {
    res.send('This is the home page!')
}

async function allEmployees(req,res) {
    try{
        const allEmployees = await Employee.find({}).populate('department')
        console.log(allEmployees)  
        res.send({
            status:200,
            data:allEmployees
        })
    } catch (err) {
        res.status(500).send({
            status:500,
            data: err
        })
    }
    
}


async function createEmployee(req,res) {
    console.log(req.body)

    const findDepartment =await Department.findOne({name: req.body.department})
    console.log(findDepartment)
    const newEmployee = {
        ...req.body,
        department:findDepartment._id
    }
    console.log(newEmployee)
    try{

        await Employee.create(newEmployee)

        res.send({
            status:200,
            data: 'Employee endpoint hit'
        })
    } catch (err) {
        res.status(500).send({
            status:500,
            data: err
        })
    }
}

async function show (req,res) {
    console.log(req.params.id)
    try{
        const employee = await Employee.findById(req.params.id).populate('department');
        console.log(employee)
        res.send({
            status:200,
            data: employee
        })
    } catch (err){
        res.status(500).send({
            status:500,
            data:err
        })
    }
}

async function deleteEmployee (req,res) {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id)
    try {
        console.log(deletedEmployee)
        res.send({
            status:200,
            data: deletedEmployee
        })
    } catch (err) {
        res.status(500).send({
            status:500,
            data:deletedEmployee
        })
    }
}


module.exports = {
    index,
    allEmployees,
    create: createEmployee,
    show,
    delete:deleteEmployee
}
