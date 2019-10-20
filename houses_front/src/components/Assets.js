import React, { Component } from "react"
import "../App.css"
import Services from "../services/Data.services"


class Assets extends Component {
  constructor() {
    super()
    this.state = { assets: [] }
    this.service = new Services()
  }

  componentDidMount(){
      this.service.getAssets()
      .then( response => {
          const theAssets = response.data
          this.setState({assets: theAssets})
      })
      .catch(err => console.log(`There was an error`,err))
  }

  render(){

    return(
        
        <section>
            <h1>Here come the assets</h1>
            <p>Somos los assets</p>
            <p>Somos los assets</p>
            {/* //Aquí irán los grid con los assets */}
        </section>
    )
  }
}
export default Assets