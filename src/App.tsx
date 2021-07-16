import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
import { RouteWithSubRoutes } from './component/RouteWithSubRoutes'
import { LoginComponent } from './pages/Login'

import { routes } from './routes'

export const App = () => <Router>
	<ul>
		<li>
			<Link to="/login">Login</Link>
		</li>
	</ul>

	<Switch>
		<Route path="/login">
			<LoginComponent />
		</Route>
	</Switch>
</Router>

export const App1 = () => <>
	<Router>
		<RouteWithSubRoutes routes={routes}/>	
	</Router>
</>

