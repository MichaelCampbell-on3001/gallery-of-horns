import React from "react";
import items from "../data.json";
import Selectedhorns from "./selectedhorns";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/row';
import CardGroup from 'react-bootstrap/CardGroup';



class Main extends React.Component {
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
      <CardGroup>
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
      </CardGroup>
      </>
    );
  }
}

class HornedCreatures extends React.Component {
  
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
      
     
      <Row xs={2} sm={3} md={4} lg={6}>
      <Col className='mt-4'>
      <Card style={{ width: '18rem' }}>
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
      </Col>
      </Row>
    );
  }
}



export default Main;