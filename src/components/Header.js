import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import FilteredHorns from './filteredhorns';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href='#home'>
          Gallery of Horns:
        </Navbar.Brand>
        <FilteredHorns onChange={this.props.onChange} />
        </Navbar>
        
    );
  }
}