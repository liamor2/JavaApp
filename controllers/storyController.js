import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


const complexStoryRequest = async (req, res) => {
    try{
        console.log(req)
    const storyParams = req.body;
    console.log(storyParams);
    const prompt = `
        Génére une histoire pour enfants suivant les critères suivants: \n
        Longueur: 250 mots\n
        Âge du public cible: ${storyParams.ageCible} ans\n
        Genre de l'histoire: ${storyParams.themeHistoire}\n
        Personnage principal: ${storyParams.persoP.nom}, ${storyParams.persoP.age
        } ans, ${storyParams.persoP.personnalite}, ${storyParams.persoP.genre}\n
        Problème ou défi à surmonter: ${storyParams.defi}\n
        Leçon ou morale: ${storyParams.morale}\n
        Éléments supplémentaires:\n
        - Objets magiques: ${storyParams.elementsSupp.objets.join(", ")}\n
        - Rencontres extraordinaires: ${storyParams.elementsSupp.rencontres.join(
            ", "
        )}`;
        
        console.log(prompt);

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "gpt-4-turbo-preview",
        });
    
        console.log(completion.choices[0]);
        res.send(completion.choices[0].message.content); 

    }catch(error){
        console.log(error);
        res.status(500).send("An error occured");
    }
};

const simpleStoryRequest = async (req, res) => {
    try{
        console.log(req)
    const storyParams = req.body;
    console.log(storyParams);
    const prompt = `
        Génére une histoire pour enfants suivant les critères suivants: \n
        Longueur: 250 mots\n
        Âge du public cible: ${storyParams.ageCible} ans\n
        Genre de l'histoire: ${storyParams.themeHistoire}\n
        Personnage principal: ${storyParams.persoP.nom}, ${storyParams.persoP.age
        } ans, ${storyParams.persoP.personnalite}, ${storyParams.persoP.genre}\n
        Ajoute un lecon de morale et des rencontres extraordinaires\n
        )}`;
        
        console.log(prompt);

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "gpt-4-turbo-preview",
        });
    
        console.log(completion.choices[0]);
        res.send(completion.choices[0].message.content); 

    }catch(error){
        console.log(error);
        res.status(500).send("An error occured");
    }
};





export { complexStoryRequest , simpleStoryRequest };