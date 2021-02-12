const router = require("express").Router();

const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController");

router.get('/', HomeController.index);
router.post('/User', UserController.create);

module.exports = router;