import { getAuth } from "firebase/auth";

const trackUserActivity = async (newsId, category, language, keywords, duration = 0, reaction = null) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.warn("User not logged in");
      return;
    }

    if (!newsId) {
      console.error("Missing newsId in trackUserActivity");
      return;
    }

    console.log(category, language);

    const activityData = {
      uid: user.uid,
      newsId,
      category: category || "General",
      language: language || "en",
      keywords: Array.isArray(keywords) ? keywords.filter(k => typeof k === "string") : [],
      duration,
      timestamp: new Date(),
    };

    // If there's a reaction, add it to the activity data
    if (reaction) {
      activityData.reaction = [{ type: reaction.type, timestamp: new Date() }];
    }

    console.log("Sending activity data:", activityData);

    const response = await fetch("http://localhost:8001/api/v4/store-activity/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(activityData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to store activity in MongoDB: ${errorText}`);
    }

    console.log("Activity successfully stored in MongoDB");
  } catch (error) {
    console.error("Error logging user activity:", error);
  }
};

export default trackUserActivity;
