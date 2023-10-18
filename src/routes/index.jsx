import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import List from '../components/List';

export default function Routes() {
	return (
		<Switch>
			<Route exact path='/' component={List} isPrivate={false} />
			<Route exact path='/comic/:id' component={<>oi</>} isPrivate={false} />
			<Redirect to='/' />
		</Switch>
	);
}
