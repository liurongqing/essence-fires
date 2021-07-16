import { lazy } from 'react'

import { LoginComponent } from './pages/Login'

const menus = []
// pages route
const pageRoutes = [
	{
		path: '/login',
		component: LoginComponent
	}
]

const routes = [
	...pageRoutes
]

export { routes, menus }
