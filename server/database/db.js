import mongoose from "mongoose";

export const Connection = async (username, password) =>{
    // const URL = 'mongodb+srv://admin:admin@flipkart-clone.ldzs8sc.mongodb.net/?retryWrites=true&w=majority'; 
    const URL = `mongodb+srv://${username}:${password}@flipkart-clone.ldzs8sc.mongodb.net/?retryWrites=true&w=majority`; 

    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});
        console.log(`database connection successfully established`);
    }catch(error){
        console.log(`Error while connecting with server: ${error.message}`); 
    }
}

export default Connection;