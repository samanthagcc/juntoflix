import axios from 'axios';

const baseURL = 'https://gateway.marvel.com/v1/public';
const params = {
	apikey: 'f62ebb90d61dfe0164133d383b6ceb5e',
	ts: 1,
	hash: '4eba94e4ae511b6ef5d5e167a40abdd9',
};

export const api = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
	params: {
		...params,
	},
});
