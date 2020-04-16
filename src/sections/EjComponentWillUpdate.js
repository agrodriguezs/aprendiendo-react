import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}
const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal] }

  UNSAFE_componentWillReceiveProps (nextProps) {
//     console.clear()
    console.log('1. componentWillReceiveProps', nextProps)
    this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
  }

  shouldComponentUpdate (nextProps) {
    console.log('2. shouldComponentUpdate')
    console.log('anterior: ', this.props.animal)
    console.log('nuevo: ', nextProps.animal)
    return true //this.props.animal !== nextProps.animal
  }

  UNSAFE_componentWillUpdate (nextProps, nextState) {
    console.log('3. componentWillUpdate', nextProps, nextState)
    const img = document.querySelector('img')
    console.log('from img element', { alt: img.alt })
    // web animations api
    img.animate([ {
      filter: 'blur(0px)'
    }, {
      filter: 'blur(2px)'
    }], {
      duration: 500,
      easing: 'ease'
    })
  }

  render () {
    console.log('-> render')
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img
          alt={this.props.animal}
          src={this.state.src}
          width='250'
        />
      </div>
    )
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf(ANIMALS)
}

class EjComponentWillUpdate extends Component {
  state = { animal: 'panda' }

  _renderAnimalButton = (animal) => {
    return (
      <button
        // disabled={animal === this.state.animal}
        key={animal}
        onClick={() => this.setState({ animal })}>
        {animal}
      </button>
    )
  }

  render () {
    return (
      <div>
        <h4>Ciclo de Actualización, Ejemplo de:
        ComponentWillUpdate</h4>
        {ANIMALS.map(this._renderAnimalButton)}
        <AnimalImage animal={this.state.animal} />
      </div>
    )
  }
}

export default EjComponentWillUpdate
