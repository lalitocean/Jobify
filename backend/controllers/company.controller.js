import {Company} from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  const {companyName} = req.body;
  if (!companyName) {
    return res.status(400).json({
      message: "Company Name is Required..",
      success: false,
    });
  }

  let company = await Company.findOne({name: companyName});
  if (company) {
    return res.status(400).json({
      message: "You cannot register same company..",
      success: false,
    });
  }

  company = await Company.create({
    name: companyName,
    userId: req.id,
  });

  return res.status(201).json({
    message: "company register successfully...",
  });
  try {
  } catch (error) {
    console.log(error.message);
  }
};

// get all companies

export const getCompany = async (req, res) => {
  const userId = req.id;
  const companies = await Company.find({userId});

  if (!companies) {
    return res.status(404).json({
      message: "Companies not found",
      success: false,
    });
  }

  try {
  } catch (error) {
    nbv;
    console.log(error.message);
  }
};

// get companies register by user

