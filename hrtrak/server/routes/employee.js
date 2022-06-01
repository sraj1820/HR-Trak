var express = require('express');
var router = express.Router();
const employeeCtrl = require('../controllers/employee')

//get home page

router.get('/', employeeCtrl.index)

router.get('/all', employeeCtrl.allEmployees)

router.post('/create', employeeCtrl.create)



module.exports = router