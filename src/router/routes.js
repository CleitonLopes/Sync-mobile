import { routes as app } from '../app'

const root = [

	{ path: '/', redirect: '/customer'}

]

export default [

	...root, ...app

]