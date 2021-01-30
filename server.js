const app = require("./app")
var port = process.env.PORT|| 3000; //esto lee el puerto de heroku y local el 3000


app.listen(port, ()=>{
    console.log("running")
})