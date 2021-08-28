import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost//first-test-db')

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  photos: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('product', ProductSchema);

// Product.create({
//   title: "Monitör",
//   description: "Philips ",
//   price: "1371.02",

      

// })

// Product.findByIdAndUpdate(
//   {_id : "61297e0bd2a7994ef014f942" },
//   {
//     photos:[
//       {"http://lorempixel.com/400/200"},
//       {"http://lorempixel.com/400/200"}
//     ]
//   },
//   {
//     new : true
//   },(err, data )=> {
//     console.log(data)
//   }
// )


export default Product;
