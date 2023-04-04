import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchIcon from '@mui/icons-material/Search';
import {ReactComponent as Logo} from '../images/logo.svg'
import { useState } from 'react';
export default function NavigationBar(){
  const [open,setOpen]=useState(false)
  const toggleMenu = ()=>{
    setOpen(!open)
  }
  return(
  <div>
  <div className="NavBar">
    <div className="row Header_content">
      <div className=" align-self-center md-center-item Navi">
        <Navbar collapseOnSelect expand="md" className='Navi'>
      <Container className='Navi'>
      <Logo className={'Nav_Logo'}/>
      <button className='open-button' onClick={toggleMenu}>&#9776;</button>
      <div className='Side_Nav_Content'>
      <div className={`side-nav ${open ? 'side-nav--active' : ''}`}>
      <div className='Side_Nav_Bg'>
          {/* The close button */}
              <span className='Search Side_Search'>
              <button className='close-button col-2' onClick={toggleMenu}>&times;</button> 
              <span className='Search_I col-2'> 
              <SearchIcon className='Search_Icon'/></span> 
              <input type='text' placeholder='Search' className='col-8 '></input>
            </span>
  <a href='./Home' className='Home'>HOME</a>
  <NavDropdown title="CATEGORY" id="collasible-nav-dropdown" >
              <div className='Dropdown_Content SIDE'>
              <div className="C1">
                            <a href={"Link"}>INTERVIEWS</a>
                            <a href={"Link"}>ORGANIZATIONAL</a>
                            <a href={"Link"}>AWARENESS</a>
                            <a href={"Link"}>ENTERTAINMENT</a>
                        </div>
                        <div className="C2">
                            <a href={"Link"}>PSYCHOTHERAPY</a>
                            <a href={"Link"}>RESEARCH</a>
                            <a href={"Link"}>POEM</a>
                            <a href={"Link"}>TAMIL</a>
                        </div>
                        <div className="C3">
                            <a href={"Link"}>PARENTING</a>
                            <a href={"Link"}>TRAVEL</a>
                            <a href={"Link"}>NEWS</a>
                            <a href={"Link"}>SELF HELP</a>
                        </div>
                        <div className="C4">
                            <a href={"Link"}>MOTIVATION</a>
                            <a href={"Link"}>HEALTH</a>
                            <a href={"Link"}>EDUCATION</a>
                            <a href={"Link"}>RELATIONSHIP</a>
                        </div>
                        <div className="C5">
                            <a href={"Link"}>SOCIAL</a>
                            <a href={"Link"}>CRIME</a>
                            <a href={"Link"}>TECHNOLOGY</a>
                        </div>
                        <div className="C6">
                            <a href={"Link"}>ADVERTISEMENT</a>
                            <a href={"Link"}>ANIMAL BEHAVIOUR</a>
                            <a href={"Link"}>PSEDO PSYCHOLOGY</a>
                        </div>
              </div>
            </NavDropdown>
  <a href='/'>About Us</a>
  <a href='/'>Contact Us</a>
</div>
      </div>
      </div>
  {/* The open button */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto HCSD">
            <Nav.Link href="#features" className='Home'>HOME</Nav.Link>
            <NavDropdown title="CATEGORY" id="collasible-nav-dropdown" >
              <div className='Dropdown_Content'>
              <div className="C1">
                            <a href={"Link"}>INTERVIEWS</a>
                            <a href={"Link"}>ORGANIZATIONAL</a>
                            <a href={"Link"}>AWARENESS</a>
                            <a href={"Link"}>ENTERTAINMENT</a>
                        </div>
                        <div className="C2">
                            <a href={"Link"}>PSYCHOTHERAPY</a>
                            <a href={"Link"}>RESEARCH</a>
                            <a href={"Link"}>POEM</a>
                            <a href={"Link"}>TAMIL</a>
                        </div>
                        <div className="C3">
                            <a href={"Link"}>PARENTING</a>
                            <a href={"Link"}>TRAVEL</a>
                            <a href={"Link"}>NEWS</a>
                            <a href={"Link"}>SELF HELP</a>
                        </div>
                        <div className="C4">
                            <a href={"Link"}>MOTIVATION</a>
                            <a href={"Link"}>HEALTH</a>
                            <a href={"Link"}>EDUCATION</a>
                            <a href={"Link"}>RELATIONSHIP</a>
                        </div>
                        <div className="C5">
                            <a href={"Link"}>SOCIAL</a>
                            <a href={"Link"}>CRIME</a>
                            <a href={"Link"}>TECHNOLOGY</a>
                        </div>
                        <div className="C6">
                            <a href={"Link"}>ADVERTISEMENT</a>
                            <a href={"Link"}>ANIMAL BEHAVIOUR</a>
                            <a href={"Link"}>PSEDO PSYCHOLOGY</a>
                        </div>
              </div>
            </NavDropdown>
            <Nav.Link href="#pricing">SUBSCRIBE MAGAZINE</Nav.Link>
            <Nav.Link href="#pricing">EDITORIAL BOARD</Nav.Link>
          </Nav>
            <span className='Search'>
              <span className='Search_I col-2'>   <SearchIcon className='Search_Icon'/></span>
              <input type='text' placeholder='Search' className='col-10 '></input>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        </div>
      </div>
  </div>)
}