import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { text, role } = req.body;

  // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
  const openai = new OpenAI({
    apiKey: `Bearer ${process.env.OPENAI_API_KEY}`,
  });

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role,
          content: text,
        },
      ],
      temperature: 0.7,
      max_tokens: 256,
    });

    const translatedText = response.choices || '';
    res.status(200).json({ translation: translatedText });
  } catch (error) {
    console.error('Error during translation:', error);
    res.status(500).json({ error: 'Translation failed' });
  }
};
