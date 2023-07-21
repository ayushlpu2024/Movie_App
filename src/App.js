          import React, { Component } from 'react'
          

import Navbar from './Components/Navbar'
import MovieList from './Components/MovieList'
          export default class App extends Component {
            render() {
              return (
                <div>
                  <Navbar/>
                  <MovieList/>
                </div>
              )
            }
          }
          