import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/projects' component={Projects}></Route>
          <Route exact path='/resume' component={Resume}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </header>
    </div>
  )
}

export default App
