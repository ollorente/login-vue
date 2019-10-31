import Vuex from 'vuex'

const store = new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {
		retireveToken(context, credentials) {
			axios.post('https://simple-blog-v1.herokuapp.com/api/v1/users', {
				email: credentials.email,
				password: credentials.password
			})
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.error(error)
			})
		}
	},
	modules: {}
})
