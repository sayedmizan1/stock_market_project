import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
  render() {
    return (
        <div className="text-center">

      <div>
        <img src={loading} alt="loading" />
      </div>
        </div>
    )
  }
}

export default spinner
