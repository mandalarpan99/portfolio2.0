import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';

export const Navigation = ()=> {
  const navname = '<AM/>'
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar expand="lg" className={`${isScrolled ? "nav-body" : " "}`} fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          {navname}
        {/* <img
              src="/Portfolio4.2.png"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skill">Skill</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            {/* <Button variant="outline-success">Resume</Button> */}
            <a href="https://drive.google.com/file/d/182pYgdyXCYBfw3cNu-qcVN-L4MLJet_o/view?usp=sharing" className="btn btn-outline-success" target="_blank">Resume</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
