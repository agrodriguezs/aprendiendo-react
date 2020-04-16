import React, { Component } from 'react';

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
  render(){
    return (
      <Box>
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por {this.props.author}</em></p>
        <p>{this.props.date}</p>
        <article>{this.props.children}</article>
      </section>
      </Box>
    )
  }
}

class Children extends Component {
  render () {
   return (
        <div className="App">
          <h4>Children Props</h4>
          <Article
            title = "Ejemplo de articulo"
            date = {new Date().toLocaleDateString()}
            author = "Marco Albarracin">
            Curabitur tellus condimentum nulla inceptos conubia purus taciti,
            malesuada commodo urna aliquet. Lorem sociosqu scelerisque congue
            tristique laoreet urna eleifend, quis vitae nonumy malesuada.
            Sit varius in duis justo.
          </Article>

          <Article
            title = "Otro Articlo"
            date = {new Date().toLocaleDateString()}
            author = "Adriana Perez">
            Tellus condimentum nulla inceptos conubia purus taciti,
            malesuada commodo urna aliquet. Congue
            tristique laoreet urna eleifend, quis vitae nonumy malesuada.
          </Article>
        </div>
    );
  }
}
export default Children;
