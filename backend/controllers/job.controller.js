import {Job} from "../models/job.model";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requriments,
      salary,
      location,
      jobType,
      postion,
      experience,
      companyId,
    } = req.body;

    if (
      !title ||
      !description ||
      !requriments ||
      !salary ||
      !location ||
      !jobType ||
      !postion ||
      !experience ||
      !companyId
    ) {
      return res.status(400).json({
        message: "somthing is missing",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      requriments: requriments.split(","),
      salary: Number(salary),
      location,
      jobType,
      postion,
      experienceLevel: experience,
      company: companyId,
      created_by: userId,
    });

    return res.status(200).json({
      message: "job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllJob = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        {title: {$regex: keyword, $options: "i"}},
        {description: {$regex: keyword, $options: "i"}},
      ],
    };
    const jobs = await Job.find(query);

    if (!jobs) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.body;
    const jobs = await Job.find({created_by: adminId});

    if (!jobs) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {}
};
