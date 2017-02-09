import http from '../../../http.js'

export default {

	uploadFile(store, data) {

		return http.post('http://www.bredasweb.com.br:8080/syncmobile/api/clienteversao/upload', data)

		.then(function(response) {

		})

		.catch( function(error) {

			console.log(error)

		})
	}

}