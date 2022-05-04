import React from 'react';
import { Form, FormGroup, FormControl, FormLabel, DropdownButton, InputGroup, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Contact/contactMe.css";

const ContactMe = () => {
  return (
    <>
        <div id='Contact' className="bg-contact">
            <h2>Contact</h2>
      
            <div className="container">
            <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <div className="left">
                        <Form.Label>Name</Form.Label>
                    </div>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div className="left">
                    <Form.Label>Email address</Form.Label>
                </div>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                {/* RADIO */}
                <div className="left">
                    <Form.Label>You are :</Form.Label>
                </div>
                <Form.Check className='radios' label="Individual" type="radio" aria-label="radio 1" />
                <Form.Check className='radios' label="Company" type="radio" aria-label="radio 1" />

                {/* RADIO */}
                <div className="left">
                    <Form.Label>What are you interested in?</Form.Label>
                </div>
                    <InputGroup className="mb-3">
                        <DropdownButton
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-1">
                        <Dropdown.Item className="drop" href="#">Front-End</Dropdown.Item>
                        <Dropdown.Item className="drop" href="#">Full-Stack</Dropdown.Item>
                        <Dropdown.Item className="drop" href="#">SEO and Adds</Dropdown.Item>
                        <Dropdown.Item className="drop" href="#">Branding</Dropdown.Item>
                        <Dropdown.Item className="drop" href="#">Other</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>

                {/* MSSG */}
                <div className="left">
                    <Form.Label>Write me:</Form.Label>
                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control className="textbox" as="textarea" rows={3} />
                </Form.Group>
                <div className="btn-send"><button type="submit">Submit</button></div>
            </Form>
            </div>
        </div>   
        
    </>
  )
}

export default ContactMe