import axios from "axios"

export const fecthProductList = async() => {
   const {data} = await axios.get('http://localhost:4001/product');

   return data;
}

export const fecthProduct = async(id) => {
   const {data} = await axios.get(`http://localhost:4001/product/${id}`);

   return data;
}

