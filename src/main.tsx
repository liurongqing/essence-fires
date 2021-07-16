import * as React from 'react'
import { render } from 'react-dom'
import { Button } from 'antd'

import './aa.css'
import 'antd/dist/antd.css'

let Greet = () => <>
		<Button type="primary">123</Button>
	</>
render(<Greet />, document.querySelector('#root'))

