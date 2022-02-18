import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container } from 'react-bootstrap'
//import { Component } from 'react'
import React from 'react';
import  Main from './components/main.js';
import  Footer from './components/footer.js';
import  Header from './components/header.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      horns: 0,

      showmodal: false 
    };
  }

  onChange = (e) => {
    this.setState({ horns: parseInt(e.target.value) });
  };

  render() {
    return (
      <Container fluid>
        <Header onChange={this.onChange}/>
        <Main horns={this.state.horns}/>
        <Footer />
      </Container>
    );
  }
}

export default App;