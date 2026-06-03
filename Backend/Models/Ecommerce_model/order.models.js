import mongoose from "mongoose";

const OrderItem = new mongoose.Schema({
  ProductId: {
    type: mongoose.Schema.Type.objectId,
    ref: "product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const OrderSchema = new mongoose.Schema(
  {
    OrderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Type.objectId,
      ref: "User",
      required: true,
    },
    OrderItem: {
      type: [OrderItem],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", DELIVERED],
      default: "PENDING",
    },
  },
  { timestamps: true },
);

export const order = mongoose.model("order:", OrderSchema);
