const app = require("./index");

const connect = require("./config/db");




app.listen(3456, async ()=>{
    try{
        await connect();
        console.log("listenning")
    }
    catch(err){
        console.log(err.message)
    }
    
})
