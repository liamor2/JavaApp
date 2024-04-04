import OpenAI from "openai";
import dotenv from "dotenv";
import lang from "../lang/promptLang.json" assert { type: "json" };

dotenv.config();


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


const complexStoryRequest = async (req, res) => {
    try{
        // console.log(req)
        const storyParams = req.body;
        const language = lang[storyParams.language];
        // console.log(storyParams);
        // console.log(language);
        const prompt = `${language.Header}${language.Length}${storyParams.longueur}${language.Age}${storyParams.ageCible}${language.Genre}${storyParams.themeHistoire}${language.MainCharacter}${storyParams.persoP.nom}, ${storyParams.persoP.age}, ${language.MainCharacterAge}${storyParams.persoP.personnalite}, ${storyParams.persoP.genre}.${language.Goal}${storyParams.defi}${language.Moral}${storyParams.morale}${language.Addition}${language.Items}${storyParams.elementsSupp.objets.join(", ")}${language.Encounters}${storyParams.elementsSupp.rencontres.join(", ")}`;
        
        console.log(prompt);

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "gpt-4-turbo-preview",
        });
    
        // console.log(completion.choices[0]);
        res.send(completion.choices[0].message.content); 
        res.send(prompt);
    }catch(error){
        console.log(error);
        res.status(500).send("An error occured");
    }
};

const simpleStoryRequest = async (req, res) => {
    try{
        // console.log(req)
        const storyParams = req.body;
        const language = lang[storyParams.language];
        // console.log(storyParams);
            const prompt = `${language.Header}${language.Length}${storyParams.longueur}${language.Age}${storyParams.ageCible}${language.Genre}${storyParams.themeHistoire}${language.MainCharacter}${storyParams.persoP.nom}, ${storyParams.persoP.age}, ${language.MainCharacterAge}${storyParams.persoP.personnalite}, ${storyParams.persoP.genre}, ${language.SimpleStoryEnd}`
        
        // console.log(prompt);

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "gpt-4-turbo-preview",
        });
    
        console.log(completion.choices[0]);
        res.send(completion.choices[0].message.content); 

    }catch(error){
        console.log(error);
        res.status(500).send("An error occurred");
    }
};





export { complexStoryRequest , simpleStoryRequest };