import React from "react";

class Hornedbeast extends React.Component {

  constructor(props){
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
      <article id={this.props.key}>
      <h2 onClick={this.handleVotes}>{this.props.title}</h2>
      <img src={this.props.image_url} alt={this.props.description}/>
      <p>{this.props.description}</p>
      <p>👍: {this.state.waves}</p>
      </article>
    )
  }
}

export default Hornedbeast;