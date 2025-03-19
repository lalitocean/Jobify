import bcrypt from "bcryptjs";
import {User} from "../models/user.model.js";
import jwt from "jsonwebtoken";

// for regsiter
// for login
// for logout
// for update profile

export const register = async (req, res) => {
  try {
    const {fullName, email, phoneNumber, password, role} = req.body;
    //   input missing logic
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "somthing is missing?",
        success: false,
      });
    }
    // user alrady exist logic
    const user = await User.findOne({email});
    if (user) {
      return res.status(400).json({
        message: "User alrady exist with this email!",
        success: false,
      });
    }

    // passwordConvertInHas Logic

    const hashedPassword = await bcrypt.hash(password, 10);
    // saved hasdedPassword..
    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    // all true
    return res.status(200).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// for Login

export const login = async (req, res) => {
  try {
    const {email, password, role} = req.body;
    //   input missing logic
    if (!email || !password || !role) {
      return res
        .status(400)
        .json({message: "somthing is missing", success: false});
    }

    // User Dose not exist Logic
    let user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email...",
        success: false,
      });
    }

    //   if not match

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect password !",
        success: false,
      });
    }

    //   checking role is correct or not

    if (role !== user.role) {
      return res.status(400).json({
        message: "Account does not exist with current role.",
        success: false,
      });
    }

    //  Generate jwt token

    const tokenDate = {
      userId: user._id,
    };

    const token = jwt.sign(tokenDate, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    //   token to store in cookie

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `welcome back ${user.fullName}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", {maxAge: 0}).json({
      message: "Logout successfully",
      success: true,
    });
  } catch (error) {}
};

// for Update profile

export const profileUpdate = async (req, res) => {
  try {
    const {fullName, email, phoneNumber, bio, skills} = req.body;

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }
    const userId = req.id;
    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
        success: false,
      });
    }

    // Profile updated values
    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.bio = bio;
    if (skills) user.skills = skillsArray;

    await user.save();

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Profile Updated successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
