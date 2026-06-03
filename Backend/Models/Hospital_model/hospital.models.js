import mongoose from "mongoose";

const HospitalSshema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    SpecialisedWith: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const hospital = mongoose.model("Hospitals:", HospitalSshema);
