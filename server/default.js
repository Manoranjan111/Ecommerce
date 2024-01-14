import { products } from "./constants/data.js";
import Product from "./model/productScheme.js";

const DefaultData = async () => {
  try {
    // await Product.deleteMany({});
    await Product.insertMany(products); 
    console.log("Data inserted successfully");
  } catch (error) {
    console.error('Error while inserting data', error.message);
  }
}

export default DefaultData; 
