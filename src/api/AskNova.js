import axios from "axios";

// ✅ Basic function for asking Nova a question
export async function askNova(prompt, explainLikeFive = false) {
  const OPENAI_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  try {
    const systemMessage = {
      role: "system",
      content: explainLikeFive
        ? "Explain this like I'm five years old. Be simple, kind, and use analogies."
        : "You are Nova, a wise and helpful AI trading assistant.",
    };

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [systemMessage, { role: "user", content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("AskNova API error:", error);
    return "Sorry, Nova encountered an error trying to help you.";
  }
}