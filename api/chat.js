import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Mensagem não enviada" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "Você é a Mortex AI, especialista em animes como Jujutsu Kaisen. Responda de forma natural."
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
    });

    const reply = completion.choices?.[0]?.message?.content;

    return res.status(200).json({
      reply: reply || "Sem resposta da IA",
    });

  } catch (error) {
    console.error("ERRO GROQ:", error);

    return res.status(500).json({
      error: error.message || "Erro interno na IA",
    });
  }
}
