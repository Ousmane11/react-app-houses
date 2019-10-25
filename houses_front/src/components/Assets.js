import React, { Component } from 'react'
import '../App.css'
import Services from '../services/Data.services'
import {Link} from 'react-router-dom'


class Assets extends Component {
  constructor() {
    super()
    this.state = { assets: [] }
    this.service = new Services()
  }


  componentDidMount() {
    this.service
      .getAssets()
      .then(response => {
        const theAssets = response.data
        this.setState({ assets: theAssets })
      })
      .catch(err => console.log(`There was an error`, err))
  }

  render() {
    const { assets } = this.state.assets
    
    return (
      <section>
        <h2>Assets</h2>
        {/* //First row with the keys of the assets// */}
        <div className="first-row-div">
          <ul className='first-row-ul'>
        {assets && assets.map(elm => <li key={elm.id}>{elm.id}</li> )}
        </ul>
        </div>
        {/* // Mapped assets to render each card with the info of the asset// */}
        <div className='cards-box'>
          {assets && assets.map(elm => (
    
            <div className='card' key={elm.id}>
              <Link to={`/entities/${elm.id}`}>
              <ul>
                <li>{elm.n_number}</li>
                <li>{elm.t_city}</li>
                <li>{elm.t_code}</li>
                <li>{elm.t_street_name}</li>
              </ul>
              </Link>
              
            </div>
           
          ))}
        </div>
      </section>
    )
  }
}
export default Assets
