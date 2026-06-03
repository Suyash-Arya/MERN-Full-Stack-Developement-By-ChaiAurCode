import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Type.objectId,
      ref: "Hospitals",
    },
  },
  { timestamps: true },
);

export const patient = mongoose.model("Patient:", PatientSchema);
