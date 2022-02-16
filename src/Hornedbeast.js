import React from "react";

class Hornedbeast extends React.Component {
  render() {
    return (
      <article>
      <h2>{this.props.title}</h2>
      <img src={this.props.image_url}/>
      <p>{this.props.description}</p>
      </article>
    )
  }
}

export default Hornedbeast;