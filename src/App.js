import React, { Component } from 'react'
import './App.css';
import AppContent from './Components/appContent'
import Axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      results: {
        name: '',
        height: '',
        weight: ''
      }

    }
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const enter = 13

    if (keyCode === enter) {
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`)
        .then((response) => {
          console.log(response.data)
          this.setState = ({
            results: {
              name: response.data.name,
              height: response.data.height,
              weight: response.data.weight
            }
          })
        })

    }
  }

  render() {
    return <AppContent
      results={this.state.results}
      handleSearch={(e) => this.handleSearch(e)}
    />
  }
}

export default App
