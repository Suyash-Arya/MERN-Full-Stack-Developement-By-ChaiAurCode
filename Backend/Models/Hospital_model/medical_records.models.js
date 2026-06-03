import mongoose from "mongoose";

const Medical_records_Schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Medical_Records = mongoose.model(
  "medical_records:",
  Medical_records_Schema,
);
