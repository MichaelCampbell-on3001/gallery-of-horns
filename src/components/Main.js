import { Card, Button } from "react-bootstrap";
import React, { Component } from "react";
import items from "../data.json";
import Selectedhorns from "./selectedhorns";
//import header from "./header";


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      showmodal: false 
    };
  }

  render() {
    return (
      <>
      <Selectedhorns open={this.props.open}/>
      <Card>
        {this.props.horns < 1 || isNaN(this.props.horns) ?
        items.map(item =>           
        <HornedCreatures
            key={item.title}
            title={item.title}
            desc={item.description}
            imgUrl={item.image_url}
        />) : items.filter(item => item.horns === this.props.horns).map(item =>           
        <HornedCreatures
            key={item.title}
            title={item.title}
            desc={item.description}
            imgUrl={item.image_url}
          />)}
      </Card>
      </>
    );
  }
}

class HornedCreatures extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      showModal: false,
    };
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  favorite = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
     


      <Card bg="dark" text="light">
        <Selectedhorns
          show={this.state.showModal}
          onClose={this.handleClose}
          title={this.props.title}
          desc={this.props.desc}
          imgUrl={this.props.imgUrl}
        />
        <Card.Img
          onClick={this.handleShow}
          variant="top"
          src={this.props.imgUrl}
          alt={`An image of a ${this.props.title}`}
          title={this.props.title}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
          <Button
            variant="light"
            onClick={this.favorite}
          >{`🖤 ${this.state.likes}`}</Button>
        </Card.Body>
      </Card>
    );
  }
}



export default Main;