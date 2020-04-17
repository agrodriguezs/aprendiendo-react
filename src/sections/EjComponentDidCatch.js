import React, { Component } from 'react'

class BotonQueLanzaError extends Component{
  state = { throwError: false}

  render () {
    if (this.state.throwError) {
      throw new Error('Error lanzado por el boton')
    }
    return (
      <button onClick={ () => this.setState({ throwError: true })}>
      Lanzar error!
      </button>
    )
  }
}

class EjComponentDidCatch extends Component {
  state = { hasError: false, errorMsg: ''}
  componentDidCatch (error, errorInfo) {
      console.log('componentDidCatch');
      console.log(error, errorInfo);
      this.setState({hasError: true, erroMsg: error.taS})
  }
  render () {
    if (this.state.hasError) {
      return (
        <div>
          <p>Error en el Componente: {this.state.erroMsg}</p>
          <button onClick={() => {this.setState({ hasError: false})}}>
            volver a la aplicacion
          </button>
        </div>
      )
    }
    return (
      <div>
        <h4>Ciclo de montaje: componentDidCatch</h4>
        <BotonQueLanzaError />
      </div>
    )
  }
}

export default EjComponentDidCatch
