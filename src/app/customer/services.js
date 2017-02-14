import http from '../../http.js'

export const saveCustomer = (data) => {

	//return http.get(`http://api.github.com/users/joasdfasdfao`)

	return http.post('http://www.bredasweb.com.br:8080/syncmobile/api/cliente', data)

}

export const getCustomers = (data) => {

	return http.get('http://www.bredasweb.com.br:8080/syncmobile/api/cliente')

}
