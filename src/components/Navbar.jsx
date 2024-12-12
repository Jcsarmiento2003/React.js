import { NavLink } from 'react-router-dom'; // Use NavLink for active link styling
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
function ColorSchemesExample() {
  return (
    <Navbar bg="dark" variant="dark"> {/* Dark variant for better contrast */}
      <Container>
        <Navbar.Brand href="#home"><b>Carlo.</b> </Navbar.Brand>
        <Nav className="me-auto">
          {/* Use NavLink instead of Link for active link styling */}
          <Nav.Link as={NavLink} to="/" end className="active-link">
          <b>HOME</b>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" activeclassname="active-link">
            <b>ABOUT</b>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/hobbies" activeclassname="active-link">
            <b>HOBBIES</b>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" activeclassname="active-link">
            <b>CONTACT</b>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/education" activeclassname="active-link">
            <b>EDUCATION</b>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;