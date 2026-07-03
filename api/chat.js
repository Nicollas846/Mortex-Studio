import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    console.log("API KEY:", process.env.GROQ_API_KEY);
    
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Mensagem não enviada" });
    }

    const completion = await groq.chat.completions.create({
model: "llama3-8b-8192",
      messages: [
        {
          role: "system",
          content: `
Você é a Mortex AI.

Você é especialista em Jujutsu Kaisen e cultura de anime.
Você conhece personagens como Gojo, Sukuna, Yuji, Megumi, Naoya Zenin e outros.

Se não souber algo, responda de forma inteligente ao invés de dizer que não reconhece.

Responda sempre de forma natural e como um especialista em anime.
`
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    const reply = completion.choices[0]?.message?.content;

    return res.status(200).json({
      reply: reply || "Sem resposta da IA"
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro ao processar resposta da IA"
    });
  }
}
