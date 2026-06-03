import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required,
    },
    experienceInYears: {
      type: String,
      required: true,
    },
    worksInHospital: {
      type: mongoose.Schema.Types.objectId,
      ref: "Hospitals",
    },
  },
  { timestamps: true },
);

export const doctor = mongoose.model("Doctor:", DoctorSchema);
