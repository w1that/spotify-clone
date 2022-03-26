const mongoose = require('mongoose')

const connection = {};

async function dbConnect(){
    if(connection.isConnected){
        return;
    }
    
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })

    connection.isConnected = db.connections[0].readyState;
    console.info("connected to database");
}

export default dbConnect;