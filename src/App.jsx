import Header from '../src/components/Header';
import List from './components/List';

import { Provider } from 'mobx-react';
import ComicStore from './stores/ComicsStore';

function App() {
	return (
		<Provider {...ComicStore}>
			<Header />
			<List />
		</Provider>
	);
}

export default App;
