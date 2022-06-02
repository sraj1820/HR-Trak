const Employee = require('../models/employee')

async function index(req,res) {
    res.send('This is the home page!')
}

async function allEmployees(req,res) {
    try{
        const allEmployees = await Employee.find({})
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
    try{
        await Employee.create(req.body)

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
        const employee = await Employee.findById(req.params.id)
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


module.exports = {
    index,
    allEmployees,
    create: createEmployee,
    show
}
