//https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript

function pickObjectKeys<T extends object, U extends keyof T>(
	obj: T,
	keys: U[],
) {
	const result = {} as Pick<T, U>;
	for (const key of keys) {
		if (key in obj) {
			result[key] = obj[key];
		}
	}
	return result;
}

const language = {
	name: "JavaScript",
	version: "ES6",
	typing: "strong",
	features: ["classes", "modules", "promises", "destructuring"],
};

const languageName = pickObjectKeys(language, ["version"]);
console.log(languageName);

function Gnrcs<T>(val: T): T {
	return val;
}

type Version = {
	version: string;
};
