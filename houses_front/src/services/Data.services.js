import axios from 'axios'

export default class Services{

    constructor() {
        this.service= axios.create({
            baseURL: `http://localhost:5000`,
            withCredentials: true
        })
    }

    getAssets = () => this.service.get('/')
    getEntities = () => this.service.get('/entities')
}