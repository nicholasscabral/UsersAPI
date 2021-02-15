const router = require("express").Router();

const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController");

router.get('/users', HomeController.index);
router.post('/user', UserController.create);

module.exports = router;