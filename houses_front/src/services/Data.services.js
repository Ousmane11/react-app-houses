import axios from 'axios'

export default class Services{

    constructor() {
        this.service= axios.create({
            baseURL: `https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos/`
        })
    }

    getAssets = () => this.service.get(`assets`)
    getEntities = () => this.service.get(`entities`)
}