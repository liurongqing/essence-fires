import { Route, Switch } from 'react-router-dom'

export const RouteWithSubRoutes = ({ routes }: any) => (
	<Switch>
		{
			routes.map((route: any, i: any) => (
				<Route
					key={i}
					path={route.path}
					exact={!!route.exact}
					render={(props) => (
						<route.component {...props} routes={route.routes || []} />
					)}
				/>
			))
		}
	</Switch>
)
