import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Box extends Component {
  render() {
    return (
        <div style = {{border:"1px solid #000", margin: 5, padding: 5}} >
        {this.props.children}
        </div>
    )
  }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  render(){
    const {title, author, date, children} = this.props
    return (
      <Box>
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <p>{date}</p>
        <article>{children}</article>
      </section>
      </Box>
    )
  }
}

class PropTypesEjemplo extends Component {
  render () {
   return (
        <div className="App">
          <h4>Children Props</h4>
          <Article
            title = "Ejemplo de articulo"
            date = {new Date().toLocaleDateString()}
            >
            Senectus vel ligula proin aenean, netus viverra pharetra dolor.
            Sodales tincidunt eros curabitur dui litora eros morbi, libero ea
            congue turpis. Curabitur tellus condimentum nulla  inceptos
            conubia purus taciti, malesuada commodo urna aliquet. Lorem sociosqu
            scelerisque congue tristique laoreet urna eleifend, quis vitae nonumy
            malesuada. Sit varius in duis justo.

          </Article>

          <Article
            title = "Segundo Ejemplo de articulo"
            date = {new Date().toLocaleDateString()}
            author = "Adriana Perez">
            Elementum vehicula aenean, habitant ut erat lorem. Nunc elit iaculis amet senectus
            imperdiet vulputate mattis, pretium curabitur nam senectus. Vel lorem dictumst pulvinar dictumst
            integer sociosqu condimentum, magna potenti class nisi. Blandit bibendum quisque auctor aenean
            tempus bibendum commodo , a ultricies lorem consequat. Purus ad tincidunt et proin
            elit felis hac, phasellus aenean viverra mollis. Senectus ea  dui laoreet dui.
          </Article>
        </div>
    );
  }
}
export default PropTypesEjemplo;
