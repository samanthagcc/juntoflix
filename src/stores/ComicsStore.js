import { makeObservable, observable, action } from 'mobx';

class ComicsStore {
	comics = [];
	umValorNovo = '';

	constructor() {
		makeObservable(this, {
			comics: observable,
			umValorNovo: observable,
			getComics: action,
		});
	}

	getComics = () => {
		this.umValorNovo = 'oi';
		return this.umValorNovo;
	};
}

const ComicStore = new ComicsStore();
export default ComicStore;
