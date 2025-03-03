import express from "express";
import Activity from "../models/activityModel.js"; // Import the activity model

const router = express.Router();

// Route to store user activity
router.post("/", async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Debugging log

    const { uid, newsId, category, language, keywords,  reaction } = req.body;
    console.log("Received Data:",reaction); // Debugging log

    if (!uid || !newsId) {
      return res.status(400).json({ message: "User ID and News ID are required" });
    }

    const newActivity = new Activity({
      uid,
      newsId,
      category,
      language,
      keywords,
      reaction,
      timestamp: new Date(),
    });

    await newActivity.save();
    console.log("Stored in MongoDB:", newActivity); // Log success

    res.status(201).json({ message: "Activity logged successfully" });
  } catch (error) {
    console.error("MongoDB Save Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});



export default router;
