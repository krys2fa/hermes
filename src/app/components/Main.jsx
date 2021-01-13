import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedDashboard } from './Dashboard';
import { ConnectedNavigation } from './Navigation';
import { ConnectedTaskList } from './TaskList';

export const Main = () => (
	<Router history={history}>
	  <Provider store={store}>
			<div>
				{/* Dashboard Goes Here
				 */}
				<ConnectedNavigation />
				<Route exact path="/dashboard" render={() => (<ConnectedDashboard />)} />
			</div>
		</Provider>
	</Router>
)

