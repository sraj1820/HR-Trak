var express = require('express');
var router = express.Router();
const employeeCtrl = require('../controllers/employee')

//get home page



router.get('/all', employeeCtrl.allEmployees)

router.post('/create', employeeCtrl.create)

router.get('/:id', employeeCtrl.show)

router.delete('/:id', employeeCtrl.delete)


module.exports = router