import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">BOOKshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Special Offre</Nav.Link>
            <NavDropdown title="Books" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Audiobooks</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                eBooks
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                kids
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

    
    <img src={ require('./image/ii.jpg')} alt=""width={1400} height={300}/>
    <Card>
        <Card.Img variant="top" src="./image/ii.jpg/100px180" />
        <Card.Body>
          <Card.Text>
          Today a reader, tomorrow a leader
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
      <Button variant="primary">BOOKshop Services</Button>{' '}
      <Button variant="secondary">About US</Button>{' '}
      <Button variant="success">comment</Button>{' '}
      
    
    </div>
  );
}

export default App;
