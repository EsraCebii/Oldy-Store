import axios from "axios"
import { zipObject } from "lodash"

export const fecthProductList = async() => {
   const {data} = await axios.get('http://localhost:4001/product')

   return data;
}