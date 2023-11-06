const express = require('express')
const {
  getOrders,
  getOrder,
  updateOrder
} = require('../controllers/orderController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//const multer = require ('multer')

//Multer untuk upload image
/*const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname)
  }
});
const upload = multer({ storage: fileStorageEngine });*/


// require auth for all menu routes
router.use(requireAuth)

// GET all menus
router.get('/', getOrders)

//GET a single menu
router.get('/:id', getOrder)

// UPDATE a menu 
router.patch('/:id', updateOrder) 

module.exports = router