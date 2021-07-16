import { Suspense } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Link, useLocation } from 'react-router-dom'

import { menus } from '../../routes'
import { RouteWithSubRoutes } from '../../component/RouteWithSubRoutes'

import './index.css'

const { Header, Content, Footer } = Layout
const { SubMenu } = Menu

export const LayoutComponent = ({ routes }: any) => {
	const location = useLocation()
	let breadcrumbs: any = menus.reduce((acc: any, c) => {
		const match = c.children.find((cv) => cv.path === location.pathname)
		if(match) {
			acc.push(c.title, match.title)
		}
		return acc
	}, [])

	return <Layout className="layout">
			<Header className="header">
				<Link to="/" className="logo"></Link>
				<Menu
					style={{ flex: 'auto' }}
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['']}
				>
					{
						menus.map(m => <SubMenu>
							{
								
							}
						</SubMenu>)
					}
				</Menu>
			</Header>

			<Content></Content>


			<Footer></Footer>

	</Layout>
}
