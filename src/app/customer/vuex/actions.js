import http from '../../../http.js'

export const listCustomers = (context) => {

	return http.get('http://www.bredasweb.com.br:8080/syncmobile/api/cliente')

	.then(response => response.data)

	.then(data => {

		context.commit('setCustomers', data.Data)
	})

	.catch( function(error) {

		console.log(error)

	})

}