import mongoose from "mongoose";
import { Category } from "./category.models";

const ProductSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImg: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    Category: {
      type: mongoose.Schema.Types.objectId,
      ref: "category",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.objectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

export const Product = mongoose.model("product:", ProductSchema);
