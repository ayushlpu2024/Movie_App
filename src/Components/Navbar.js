    import React, { Component } from 'react'
    
    export default class Navbar extends Component {
      render() {
        return (
          <div className="nav">
            <div className= "logo">Movie-App</div>
            <div className = "icon"><img src= "https://cdn-icons-png.flaticon.com/128/3737/3737372.png" />
            <span>0</span>
            </div>
          </div>
        )
      }
    }
    