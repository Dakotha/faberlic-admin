import axios from 'axios'

import store from './store'

const instance = axios.create({
    baseURL: 'http://api.faberlic.ostroleka.pl',
})

// instance.defaults.headers.common['Authorization'] = store.state.user.token

export default instance