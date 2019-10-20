import React, { Component } from 'react'
import '../App.css'
import Services from '../services/Data.services'

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
    console.log(assets)
    return (
      <section>
        <h2>Assets</h2>
        <div className='cards-box'>
          {assets && assets.map(elm => (
            <div className='card' key={elm.id}>
              <ul>
                <li>{elm.n_number}</li>
                <li>{elm.t_city}</li>
                <li>{elm.t_code}</li>
                <li>{elm.t_street_name}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
}
export default Assets
