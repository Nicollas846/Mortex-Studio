import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages inválidas" });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
Você é a Mortex AI.

Você pode falar sobre:
- Jujutsu Shenanigans (JJS)
- Jujutsu Kaisen (anime e mangá)

REGRAS:
- Seja um coach de JJS (combos, dicas, estratégias)
- Também pode responder sobre JJK
- Seja direto, estilo jogador experiente
- Nunca invente coisas que não existem
- Se o usuário disser "bora mudar de assunto", responda: "Bora, sobre o que?"
`
        },
        ...messages
      ],
      temperature: 0.7,
    });

    const reply = completion.choices?.[0]?.message?.content;

    return res.status(200).json({
      reply: reply || "Sem resposta da IA",
    });

  } catch (error) {
    console.error("ERRO:", error);

    return res.status(500).json({
      error: error.message || "Erro interno",
    });
  }
}
