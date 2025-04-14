import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },
    profile: {
      profilePhoto: {type: String, default: ""},
      bio: {
        type: String,
        
      },
      skills: [{type: String}],
      resume: {type: String},
      resumePathName: {type: String},
      company: {type: mongoose.Schema.Types.ObjectId, ref: "Company"},
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
