# StoryTime API

## Installation

Clonez le repo, naviez à la racine et installez les dépendances avec `npm install`
Faire tourner le server avec `npm start .\app.js` pour un server statique ou `nodemon .\app.js` pour un server dynamique.
Le serveur tourne sur le port 42424 par défaut.

## Contributeurs

- Samuel VERGNOL
- Liam Gattegno

## Description

Serveur node qui recoit des requètes POST avec les paramètres de l'histoire à générer.

Il y a trois requètes possible sur ce serveur:

- /complexStory: Prend en paramètre un objet JSON avec un grands nombres de paramètres précis pour générer une histoire la plus customisée possible.
- /simpleStory: Prend en paramètre un objet JSON avec un petit nombre de paramètres pour générer une histoire plus simple.
- /tts: Prend en paramètre un texte et le transforme en fichier audio lu par une IA de génération de voix.

Paramètres exemples de complexStory:

```json
  const storyParams = {
        ageCible: 8,

        themeHistoire: "aventure fantastique",

        persoP: {
            nom: "Léo",
            age: 8,
            personnalite: "curieux",
            genre: "M",
        },
        persosSecondaires:
            [
                { nom: "Flammèche", description: "un dragon amical" },
                { nom: "Luna", description: "une licorne mystérieuse" }
            ]
        ,

        defi: "trouver un artefact magique pour sauver son village",

        morale: "L'importance du courage et de la persévérance pour surmonter les défis",

        elementsSupp: {
            objets: ["une baguette enchantée", "une carte au trésor"],
            rencontres: [
                "une sorcière excentrique",
                "des lutins farceurs",
            ],
        },
        longueur: 250
        language:"fr",
        images: true
    }
```

Paramètres exemples de simpleStory:

```json
  const storyParams = {
        ageCible: 8,

        themeHistoire: "aventure fantastique",

        persoP: {
            nom: "Léo",
            age: 8,
            personnalite: "curieux",
            genre: "M",
        },
        longueur: 250,
        langue: "Francais"
    }
```

Ces requetes prennent les paramètres de l'histoire et les inserent dans un prompt transmis à un modèle GPT-4 pour générer une histoire.
Le prompt est envoyé au modèle GPT par le bias de leur libraiire openai.

Le serveur utilise un modèle de controleurs pour séparer les différentes routes et les fonctions associées afin de faciliter la maintenance et l'ajout de nouvelles routes.

Les clés d'API d'openai sont stockées dans un fichier .env qui n'est pas versionné pour des raisons de sécurité. C'est aussi pourquoi on à décidé d'utiliser un serveur plutot que de faire les requètes directement depuis l'appli front-end.

Les requetes sont aussi documentées avec swagger sur /api-docs.
