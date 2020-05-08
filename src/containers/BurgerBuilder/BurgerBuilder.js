import React, { Component } from 'react'

import Aux from '../../hoc/Aux';

export default class BurgerBuilder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      someState: true
    }
  }
  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>Burger Controls</div>
      </Aux>
    )
  }
}
