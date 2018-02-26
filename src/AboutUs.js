import React, { Component } from 'react'
import Donkey from './img/Donkey.jpeg'

export default class extends Component {
  render(){
    return (
      <div>
        <h1>About US</h1>
        <img src={ Donkey }/>
      </div>
    );
  }
}