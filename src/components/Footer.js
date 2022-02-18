import Navbar from 'react-bootstrap/Navbar';
import { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href="#bio">Michael Campbell</Navbar.Brand>
      </Navbar>
    );
  }
}