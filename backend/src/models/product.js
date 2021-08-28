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


export default Product;
