class HomeController{

    async index(req, res){
        res.send("hello world");
    }

}

module.exports = new HomeController();