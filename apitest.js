import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();


const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

const ageCible = 8;
const genreHistoire = "aventure fantastique";
const personnagePrincipal = {
  nom: "Léo",
  age: 8,
  personnalite: "curieux",
  objectif: "explorer le monde magique",
};
const lieuEtEpoque = "un village médiéval dans une contrée lointaine";
const defiASurmonter = "trouver un artefact magique pour sauver son village";
const leconMorale =
  "L'importance du courage et de la persévérance pour surmonter les défis";
const elementsSupplementaires = {
  objetsMagiques: ["une baguette enchantée", "une carte au trésor"],
  animaux: ["un dragon amical nommé Flammèche"],
  rencontresExtraordinaires: [
    "une sorcière excentrique",
    "des lutins farceurs",
  ],
};

const prompt = `
Génére une histoire pour enfants suivant les critères suivants:
Longueur: 250 mots
Âge du public cible: ${ageCible} ans
Genre de l'histoire: ${genreHistoire}
Personnage principal: ${personnagePrincipal.nom}, ${
  personnagePrincipal.age
} ans, ${personnagePrincipal.personnalite}, ${personnagePrincipal.objectif}
Lieu et époque: ${lieuEtEpoque}
Problème ou défi à surmonter: ${defiASurmonter}
Leçon ou morale: ${leconMorale}
Éléments supplémentaires:
- Objets magiques: ${elementsSupplementaires.objetsMagiques.join(", ")}
- Animaux: ${elementsSupplementaires.animaux.join(", ")}
- Rencontres extraordinaires: ${elementsSupplementaires.rencontresExtraordinaires.join(
  ", "
)}`;

console.log(prompt);

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-4-turbo-preview",
  });

  console.log(completion.choices[0]);
}

main();