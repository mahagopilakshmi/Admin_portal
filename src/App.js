import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import  Form  from './components/Form';
import SideNav from './components/SideNav';
// import { Container } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
class App extends Component {
  render() {

    return (
    <div id="root">
      <NavBar />
     <Container>
       <Row>
       <Col><SideNav /></Col>
       <Col><Form /></Col>
       </Row>
        </Container>
     </div>
      );
  }
}

export default App;
