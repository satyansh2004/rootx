import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import process from 'process';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/generate-report", async (req, res) => {
  try {
    const data = req.body;

    const prompt = `
Generate a professional AI Agriculture Report.

Location:
District: ${data.district}
Country: ${data.country}
 
Crop Mode: ${data.cropMode}
Specific Crop: ${data.selectedCrop || "AI Recommended"}

Land Size: ${data.landSize} ${data.landSizeUnit}
Irrigation Types: ${data.irrigation?.join(", ") || "Not specified"}

Risk Appetite: ${data.riskAppetite}
Soil Nutrition Preference: ${data.nutritionPreference}

Local Practice:
${data.localPractice || "None"}

Give:
- Soil analysis
- Fertilizer plan
- Irrigation plan
- Risk assessment
- Expected yield
- Final recommendation

Make it clean and structured.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
// const response = {
//   choices: [
//     {
//       message: {
//         content: `AI Agriculture Report (Test Mode)

// Soil Analysis:
// - Suitable for wheat and rice cultivation.

// Fertilizer Plan:
// - Use NPK 20-20-20 twice per season.

// Irrigation Plan:
// - Drip irrigation recommended.

// Risk Assessment:
// - Medium rainfall risk.

// Expected Yield:
// - 18–22 quintals per acre.

// Final Recommendation:
// - Proceed with selected crop.
//         `
//       }
//     }
//   ]
// };
    res.json({
      report: response.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI generation failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});