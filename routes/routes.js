const router = require("express").Router();

const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController");

router.get('/users', UserController.index);
router.post('/user', UserController.create);
router.get('/users/:id', UserController.findUser);

module.exports = router;