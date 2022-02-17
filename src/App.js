import React from "react";
import './App.css'; 
import Header from "./Header.js"
import Main from "./Main"
import Footer from "./Footer";
import data from './data.json';
import Modal from "react-bootstrap";

class App extends React.Component {
  showModal:true


  handleCloseModal = () => {
    this.setState({
      showModal:false
    })
  }

  handleShowModal = () =>{
    this.setState({
      showModal: true
    })
  }

  render(){
    return (
  <>
     <Header />
     <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
       <Modal.Header closeButton>
         <Modal.Title>{}</Modal.Title>
       </Modal.Header>

     </Modal>
     <Main data={data}/>
     <Footer />     
  </>
    );
  }
}

export default App;