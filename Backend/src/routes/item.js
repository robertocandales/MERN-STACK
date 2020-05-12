const { Router } = require('express');
const router = Router();

const { getItem, createItem, deleteItem } = require('../controllers/controllerItem');

// @route  Get api/items
router.route('/').get(getItem);
//Post
router.route('/').post(createItem);

router.route('/:id').delete(deleteItem);

module.exports = router;
