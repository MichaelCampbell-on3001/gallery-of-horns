import React from "react";
import Hornedbeast from "../Hornedbeast";
import Row from 'react-bootstrap/Row'
class Main extends React.Component {
  render() {
    let hornedbeast = [];

    this.props.data.forEach((beast, index) => {
      hornedbeast.push(

        <Hornedbeast
          key={index}
          image_url={beast.image_url}
          title={beast.title}
          description={beast.description}
          horns={beast.horns}
          keyword={beast.keyword} />


      )
    })
    return (
      <main>
        <Row>
          {hornedbeast}
        </Row>
      </main>

    );
  }
}

export default Main;