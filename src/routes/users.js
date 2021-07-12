const { Router } = require('express');

const router = Router();

// controllers
const {
  getUsers,
  sendUsers,
  updateUsers,
  patchUsers,
  deleteUsers,
} = require('../controllers/users');


router.get('/', getUsers);

router.post('/', sendUsers);

router.put('/:id', updateUsers);

router.patch('/', patchUsers);

router.delete('/:id', deleteUsers);

module.exports = router;