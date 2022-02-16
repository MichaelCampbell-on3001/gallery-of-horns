import React from "react";
import Hornedbeast from "./Hornedbeast";

class Main extends React.Component {
  render() {
    let hornedbeast = [];
    
    this.props.data.forEach(beast => {
         hornedbeast.push(

          <Hornedbeast image_url={beast.image_url} title={beast.title} description={beast.description} horns={beast.horns} keyword={beast.keyword} />
        

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