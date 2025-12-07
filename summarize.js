import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function summarize(text) {
  const resp = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Summarize the text into exactly 3 sentences." },
      { role: "user", content: text }
    ]
  });

  return resp.choices[0].message.content;
}

// 使用示例
(async () => {
  const longText = `
    Artificial Intelligence is rapidly transforming industries...
  `;

  console.log(await summarize(longText));
})();
