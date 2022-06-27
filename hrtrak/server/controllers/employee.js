const Employee = require('../models/employee')
const Department = require('../models/department')



async function allEmployees(req,res) {
    try{
        const allEmployees = await Employee.find({}).populate('department')
      
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
  

    const findDepartment =await Department.findOne({name: req.body.department})
  
    const newEmployee = {
        ...req.body,
        department:findDepartment._id
    }
   
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
  
    try{
        const employee = await Employee.findById(req.params.id).populate('department');
     
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
    // const deletedEmployee = await Employee.findByIdAndDelete(req.params.id)
   const deletedEmployee = await Employee.deleteOne({_id: req.params.id})
  
    try {
       
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
  
    allEmployees,
    create: createEmployee,
    show,
    delete:deleteEmployee
}
