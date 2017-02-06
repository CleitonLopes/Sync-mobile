export default {

	'GET_CUSTOMERS' (store, data) {

		store.customers = data

	},

	'SELECTED_CUSTOMERS' (store, data) {

		store.selectedCustomer = data
	}
}