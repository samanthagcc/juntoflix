import { createServer, Model, JSONAPISerializer } from 'miragejs';

export function mockServer({ environment = 'development' } = {}) {
	createServer({
		environment,
		models: {
			movies: Model.extend(),
		},

		serializers: {
			application: JSONAPISerializer,
		},

		seeds(server) {
			server.db.loadData({
				movies: [
					{ id: 1, title: 'Harry Potter e a Pedra Filosofal', year: 1990 },
				],
			});
		},

		routes() {
			this.urlPrefix = 'http://localhost:3000';
			this.namespace = 'api';

			this.get('/movies', (schema, request) => {
				return schema.db.movies;
			});

			this.get('/movies/favorites', (schema, request) => {
				return schema.db.movies.favorites;
			});

			this.post('/movies/favorites', (schema, request) => {
				const data = request.requestBody;
				return schema.db.movies.insert(data);
			});
		},
	});
}
