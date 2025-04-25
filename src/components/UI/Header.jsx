import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const [language, setLanguage] = useState('EN');

  const handleSelect = (eventKey) => {
    setLanguage(eventKey);
  };

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/images/logo.png" alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Player Assessment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Global Ratings</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Predictions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
          </ul>
          <div className="header-bar d-flex align-items-center justify-content-between px-3 py-2">
            {/* Search Input */}
            <InputGroup className="search-box me-2">
              <InputGroup.Text className="search-icon">
                <img src="/images/search.png" alt="" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search Team, Player or club"
                className="search-input"
              />
            </InputGroup>

            {/* Buttons & Language */}
            <div className="d-flex align-items-center gap-2">
              <Button className="btn-login" variant="light">Login</Button>
              <Button className="btn-signup" variant="primary">Sign Up</Button>
              <div>
              <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle variant="custom" className="custom-dropdown-toggle">
                    <img src="/images/drop-language.png" alt="" /> {language} <img src="/images/drop-icon.png" alt="" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="custom-dropdown-menu">
                    <Dropdown.Item eventKey="EN">EN</Dropdown.Item>
                    <Dropdown.Item eventKey="FR">FR</Dropdown.Item>
                    <Dropdown.Item eventKey="DE">DE</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
