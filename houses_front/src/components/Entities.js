import React, { Component } from "react"
import "../App.css"
import Services from "../services/Data.services"


class Entities extends Component {
  constructor() {
    super()
    this.state = { entities: [] }
    this.service = new Services()
  }

  componentDidMount(){
    this.service.getEntities()
    .then( response => {
        const theEntities = response.data
        this.setState({entities: theEntities})
    })
}


  render(){

    return(
        
        <section>
            <h1>This is an entity</h1>
            
        
        </section>
    )
  }
}
export default Entities