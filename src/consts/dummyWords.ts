interface Word {
	id: number;
	english: string;
	spanish: string;
	englishExample: string;
	spanishExample: string;
}

interface Words {
	[key: string]: Word[];
}

export const dummyWords: Words = {
	verbs: [
		{
			id: 1,
			english: "to buy",
			spanish: "comprar",
			englishExample: "I want to buy three apples.",
			spanishExample: "Yo quiero comprar dos manzanas.",
		},
		{
			id: 2,
			english: "to have",
			spanish: "tener",
			englishExample: "Luis and I have two suitcases.",
			spanishExample: "Luis y yo tenemos tres maletas.",
		},
	],
	food: [
		{
			id: 1,
			english: "apple",
			spanish: "la manzana",
			englishExample: "I want to buy an apple.",
			spanishExample: "Yo quiero comprar una manzana.",
		},
		{
			id: 2,
			english: "bread",
			spanish: "el pan",
			englishExample: "No, I don't want more bread, thanks.",
			spanishExample: "No, yo no quiero mas pan, gracias.",
		},
	],
};
