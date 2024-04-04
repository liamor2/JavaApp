import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const api_key = process.env.ELEVENLABS_API_KEY;

const speechToText = async (req, res) => {
    try {
        const speechParams = req.body;
        const options = {
            method: 'POST',
            headers: {
                'accept': 'audio/mpeg',
                'xi-api-key': api_key,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "text": speechParams.text,
                "model_id": "eleven_multilingual_v2",
            })
        }
        const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + speechParams.voiceID, options);
        const audioBuffer = await response.arrayBuffer();
        const audioData = Buffer.from(audioBuffer);
        res.set('Content-Type', 'audio/mpeg');
        res.send(audioData);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("An error occured");
    }
}

export { speechToText };