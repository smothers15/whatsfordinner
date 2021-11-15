var express = require('express');
var router = express.Router();
const restaurantController = require('../controllers/resturantController');

/* GET home page. */
router.get('/', restaurantController.viewAll);

module.exports = router;
