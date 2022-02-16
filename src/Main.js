import React from "react";
import Hornedbeast from "./Hornedbeast";

class Main extends React.Component {
  render() {
    let hornedbeast = [];
    
    this.props.data.forEach(value => {
         value.hornedbeast.push(

          <Hornedbeast image_url={this.props.image_url} title={this.props.title} description={this.props.description} horns={this.props.horns} keyword={this.props.keyword} />
        

         )
       })
       return (
       <main>
         {hornedbeast}
         </main>

    );
  }
}

export default Main;