import React, { Component } from 'react'
import './App.css';
import AppContent from './Components/appContent'
import Axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.setState = {

    }
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const enter = 13

    if (keyCode === enter) {
      Axios.get(`https://pokeapi.co/api/v2/${value}/`)
        .then((response) => {
          this.setState = ({
             
          })
        })
    }

  }

  render() {
    return <AppContent

    />
  }
}

export default App
