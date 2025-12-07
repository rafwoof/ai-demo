import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function run() {
  const resp = await client.chat.completions.create({
    model: "gpt-4o-mini",   // 
    messages: [
      { role: "user", content: "Explain what is AI in one sentence." }
    ]
  });

  console.log(resp.choices[0].message.content);
}

run();
