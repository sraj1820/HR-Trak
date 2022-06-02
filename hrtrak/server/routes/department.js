var express = require('express');
var router = express.Router();
const departmentCtrl = require('../controllers/department')

//get home page

router.get('/all', departmentCtrl.allDepartments)
router.post('/create', departmentCtrl.create)


module.exports = router