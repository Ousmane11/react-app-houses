import React from 'react'

import './App.css'

import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Assets from './components/Assets'
import Entities from './components/Entities'

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={Assets} />
          <Route path='/entities/:id' component={Entities} />
        </Switch>
        <div>
          <small>
            Icons made by
            <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
              Freepik
            </a>
            from{' '}
            <a href='https://www.flaticon.com/' title='Flaticon'>
              www.flaticon.com
            </a>
          </small>
        </div>
      </main>
    </div>
  )
}

export default App
