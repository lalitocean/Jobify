import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// for regsiter

export const register = async (req, res) => {
  try {
    const {fullName, email, phoneNumber, password, role} = req.body;
    //   input missing logic
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res
        .status(400)
        .json({message: "somthing is missing", success: false});
    }
    // user alrady register logic
    const user = await User.findOne({User});
    if (User) {
      return res.status(400).json({
        message: "User alrady exist with this email!",
        success: false,
      });
    }

    // passwordConvertInHas Logic

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

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
    if (!User) {
      return res.status(400).json({
        message: "Incorrect email !",
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

    if (role == !user.role) {
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

    User = {
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

export const updateProfile = async (req, res) => {
  try {
    const {fullName, email, phoneNumber, bio, skills} = req.body;

    if (!fullName || !email || !phoneNumber || !bio || !skills) {
      return res
        .status(400)
        .json({message: "Something is missing", success: true});
    }

    const skillsArray = skills.split(",");

    // updated values
    User.fullName = fullName;
    User.email = email;
    User.phoneNumber = phoneNumber;
    User.bio = bio;
    User.skills = skillsArray;

    await User.save();

    User = {
      _id: User._id,
      fullName: User.fullName,
      email: User.email,
      phoneNumber: User.phoneNumber,
      role: User.role,
      profile: User.profile,
    };

    return res.status(200).json({
      message: "Profile Updated successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
