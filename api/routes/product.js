const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
router.get('/', productController.home)

router.post('/create', express.raw({ type: '*/*' }), productController.createUser)



module.exports = router;