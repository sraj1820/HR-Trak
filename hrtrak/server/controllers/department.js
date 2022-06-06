const Department = require('../models/department')


async function allDepartments(req,res) {
    try{
        const allDepartments = await Department.find({}).populate('manager')
        console.log(allDepartments)  
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
    console.log(req.body)
    try{
        await Department.create(req.body)

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