import React from "react";

//import Modal from 'react-boostrap/Modal';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class Hornedbeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    }
  }

  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    })
  }

  render() {
    return (


      <Col className='mt-4'>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            onClick={this.handleVotes}
            variant="top"
            src={this.props.image_url}
            alt={this.props.description} />
          <Card.Title onClick={this.handleVotes}> {this.props.title}</Card.Title>
          <p>👍: {this.state.votes}</p>

          <Card.Text>{this.props.description}</Card.Text>


        </Card>
      </Col>

    )
  }
}

export default Hornedbeast;