import { routes as customer } from './customer'

import { routes as upload } from './upload'

import { routes as customerUpload } from './customer-update'

export default [

	...customer, ...upload, ...customerUpload

]