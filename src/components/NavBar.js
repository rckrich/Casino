import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState();
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (

      <Navbar expand="md" className={scrolled ? "scrolled" : ""} style={{display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
          <Navbar.Brand href="/home" style={{alignItems: "left", paddingLeft: "10px"}}>
            
          </Navbar.Brand>
            <Nav >
              <Nav.Link href="/egypt" className={activeLink === 'egypt' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('egypt')}>Egypt</Nav.Link>
              <Nav.Link href="/dragon" className={activeLink === 'dragon' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('dragon')}>Dragon</Nav.Link>
            </Nav>

      </Navbar>


  )
}
