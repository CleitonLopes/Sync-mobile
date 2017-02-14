import http from '../../http.js'


export const getEmployee = (data) => {

	return http.get(`http://www.bredasweb.com.br:8080/syncmobile/api/clienteatualizacao/empresa/${data}`)

}