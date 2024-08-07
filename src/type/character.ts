export type characterType = {
	name: string;
	url : string;
	height: string;
	mass: string;
	birth_year: string
	created: string;
	films: [string];
}

export type characterResponseType = {
	count: number;
	previous: string;
	next: string;
	results: Array<characterType>
}