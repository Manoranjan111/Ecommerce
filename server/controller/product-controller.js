import Products from '../model/productScheme.js'

export const getProducts = async(request, response) =>{
    try {
        const products = await Products.find({});

        response.status(200).json(products);
        
    } catch (error) {
        response.status(500).json({message: error.message}); 
    }
}
export const getProductById = async(request, response) =>{
    try {
        const id = request.params.id;
        const product = await Products.findOne({'id':id});

        response.status(200).json(product);
        
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}