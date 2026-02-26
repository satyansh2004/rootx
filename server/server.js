import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173", 
    "X-Title": "RootX Agriculture App", 
  },
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
      model: "z-ai/glm-4.5-air:free", // ✅ GLM Free Model
      messages: [
        { role: "user", content: prompt }
      ],
    });

    res.json({
      report: response.choices[0].message.content,
    });

  } catch (error) {
    console.error("OpenRouter Error:", error);
    res.status(500).json({ error: "AI generation failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});