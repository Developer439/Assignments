import React, { Suspense, lazy } from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './components/common/loader';

const Home = lazy(() => import('./components/campaigns'));

const App = ({ store, loader }) => {
	return (
		<Provider store = { store }>
			<Router>
				{ loader && <Loader /> }
				{/* <ErrorBoundary> */}
					<Suspense fallback = { <Loader /> }>
						<Switch>
							<Route path = "/" component = { Home } ></Route>
							{/* <Route path = "/" component = { ErrorPage } /> */}
						</Switch>
					</Suspense>
				{/* </ErrorBoundary> */}
			</Router>
		</Provider>
	);
}

const mapStateToProps = store => ({
	loader: store.common.loader
})

export  default connect(mapStateToProps)(App);
