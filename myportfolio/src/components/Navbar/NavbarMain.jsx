import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarMain() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top'>
      <Container>
        <Navbar.Brand href="#home">{`< dan _ josh  />`}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
          <Nav.Link href="#features">HOME</Nav.Link>
            <Nav.Link href="#pricing">ABOUT ME</Nav.Link>
            <Nav.Link href="#pricing">TECHNOLOGIES</Nav.Link>
            <Nav.Link href="#pricing">PROJECTS</Nav.Link>
            <Nav.Link href="#pricing">YOUTUBE</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;