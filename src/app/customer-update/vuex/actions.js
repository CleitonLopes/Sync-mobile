
import { getEmployee } from '../services'

export default {

	selectedUpload(store, data) {

		return getEmployee(data)

		.then(response => response.data)

		.then(data => {

			store.commit('GET_EMPLOYEE', data.Data)

		})

		.catch(function(error) {

			console.log(error.response)
		})

	}
}