import {Application} from "../models/application.model.js";
import {Job} from "../models/job.model";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required",
        success: true,
      });
    }
    // check if the user already applied for the job

    const existingApplied = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplied) {
      return res.status(400).json({
        message: "Already applied..",
        success: false,
      });
    }

    // check fi the job exist ?

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }

    // now creating application

    const createdApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(createdApplication._id);
    await job.save();

    return res.status(201).json({
      message: "job applied successfully..",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// gettting all applied jobs

export const getAppliedJob = async (req, res) => {
  try {
    const userId = req.id;
    const applications = await Application.find({applicant: userId})
      .sort({
        createdAt: -1,
      })
      .populate({
        Path: "job",
        options: {sort: {createdAt: -1}},
        populate: {
          path: "company",
          options: {sort: {createdAt: -1}},
        },
      });

    if (!applications) {
      return res.status(404).json({
        message: "No Applications",
        success: false,
      });
    }

    return res.status(201).json({
      applications,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
