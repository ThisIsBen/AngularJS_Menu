const express = require('express');
const router = express.Router();
const { submitOrder } = require('../controllers/orderController');
const { submitOrder2 } = require('../controllers/orderController');
const { uploadDishImage,setupMenu } = require('../controllers/setupMenuController');

//api 1  /api/orders
router.post('/', submitOrder);

//api 2 /api/orders/soup
router.post('/soup', submitOrder2 );

//api 3 /api/orders/setupMenu
router.post('/setupMenu', uploadDishImage,setupMenu );


module.exports = router;
