import mongoose, { Schema } from "mongoose";

const activitySchema = new Schema({
  uid: {   // Firebase User ID
    type: String,
    trim: true
  },
  newsId: {
    type: String,
    required: true 
  },
  category: {
    type: String,
  },
  language: {
    type: String,
  },
  keywords: { 
    type: [String], 
    default: [] 
  },
  reaction: [{   // ✅ Reaction is now an array of objects
    type: {
      type: String,
      enum: ["like", "dislike", "not_interested"],
      required: true
    }
  }],
  duration :{
    type: Number,
    default: 0
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  }
});

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
