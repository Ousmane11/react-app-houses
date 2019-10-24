import React, { Component } from 'react'
import '../App.css'
import Services from '../services/Data.services'
import ContextMenu from 'react-context-menu'

class Entities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entities: [],
      id: props.match.params.id
    }
    this.service = new Services()
  }



  // Gets the entities from the API and then filters those that match with the 'id' of the clicked entity that was clicked
  //Saves the data in the state to be render adterwards
  componentDidMount(props) {
    this.service
      .getEntities()
      .then(response => {
        const theEntities = response.data.entities.filter(elm => elm.id_asset == this.state.id)
        console.log(theEntities)
        this.setState({ entities: theEntities })
      })
      .catch(err => console.log(`There was an error`, err))
  }



  render() {
    const entities = this.state.entities
   
     return (
      <section>
        <h2>Entities from Asset {this.state.id}</h2>
        <div className='first-row-div'>
          <ul className='first-row-ul'>
            {/* // Mapped entities to render the keys of the entities in the portal// */}
        {entities && entities.map(elm => <li>{elm.id}</li> )}
        </ul>
        </div>
        <div className='entities-box'>
          {/* Iteration through the entities to render them all*/}
          {entities &&
            entities.map(elm => (
              
              <div className='entities-card' key={elm.id}>
            
                {/* Iteration through the each entities components to render them */}
                {Object.entries(elm).map(element => {
                  return (
                    <p>
                      {element[0]} : {element[1]}
                    </p>
                  )
                })}
              </div>
            ))}
        </div>
      </section>
    )
  }
}
export default Entities
