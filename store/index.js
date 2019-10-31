import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Promise, resolve, reject } from 'q'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://simple-blog-v1.herokuapp.com/api/v1'

export const store = new Vuex.Store({
	state: {
		token: null //|| localStorage.getItem('access_token')
	},
	getters: {
		loggedIn(state) {
			return state.token !== null
		}
	},
	mutations: {
		retrieveToken(state, token) {
			state.token = token
		}
	},
	actions: {
		retrieveToken(context, credentials) {

			return new Promise((resolve, reject) => {
				axios.post('/auth', {
					email: credentials.email,
					password: credentials.password
				})
				.then(response => {
					const token = response.data.jwt

					localStorage.setItem('access_token', token)
					context.commit('retrieveToken', token)
					resolve(response)
					console.log(response)
				})
				.catch(error => {
					console.error(error)
					reject(error)
				})
			})
		}
	},
	modules: {}
})
