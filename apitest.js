import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();


const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});


async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Java method that takes a JSON string and sends it in the body of a post request to a url, no libraries, simple as possible" }],
    model: "gpt-4-turbo-preview",
  });

  console.log(completion.choices[0]);
}

main();