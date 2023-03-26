import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HeaderNavigation() {

const cartitem=useSelector((state)=>state.items)



  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Smiliy.pk</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Trending products</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>



          <Nav>
            <Nav.Link><Link style={{textDecoration:"none"}} to="/usercart"> <BsCartFill className='carticon'/><span style={{color:"white",fontSize:"20px",textDecoration:'none'}}>{cartitem.length}</span></Link></Nav.Link>
          </Nav>
        
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavigation;