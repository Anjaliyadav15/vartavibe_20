// import { db } from "./../components/firebase.js"; // Adjust the path if needed
//  import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore";

// import { getAuth } from "firebase/auth";

// export const logNewsRead = async (newsId, category, language, keywords) => {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   if (!user) return;

//   const userActivityRef = doc(db, "user_activity", user.uid);
//   const keywordsRef = doc(collection(userActivityRef, "frequent_keywords"), "keywordsDocId"); 


//   try {
//     // Store individual news read event
//     await addDoc(collection(userActivityRef, "news_reads"), {
//       newsId,
//       category,
//       language,
//       keywords,
//       timestamp: serverTimestamp(),
//     });

//     // Update keyword frequency
//     const keywordDoc = await getDoc(keywordsRef);
//     let keywordData = keywordDoc.exists() ? keywordDoc.data().keywords : {};

//     keywords.forEach((keyword) => {
//       keywordData[keyword] = (keywordData[keyword] || 0) + 1;
//     });

//     await updateDoc(keywordsRef, { keywords: keywordData });

//     console.log("News read logged with keywords");
//   } catch (error) {
//     console.error("Error logging news read: ", error);
//   }
// };
