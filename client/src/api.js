import axios from "axios";

export const fecthProductList = async({ pageParam = 1 }) => {
   const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product?pages{pageParam}`);

   return data;
}

export const fecthProduct = async(id) => {
   const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`);

   return data;
}

