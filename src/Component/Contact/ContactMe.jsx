import React from 'react';
import { Form, FormGroup, FormControl, FormLabel, DropdownButton, InputGroup, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Contact/contactMe.css";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs () {
  
    function sendEmail (e) {
      e.preventDefault();
  
      emailjs.sendForm("Sophia.T","template_ayohe3b", e.target, '57W2vhkskFsJbdIiK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

  return (
    <>
        <div id='Contact' className="bg-contact">
            <h2>Contact</h2>
      
            <div className="container">
            <Form onSubmit={sendEmail}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <div className="left">
                        <Form.Label>Name</Form.Label>
                    </div>
                    <Form.Control type="text" placeholder="Your Name" name='name'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div className="left">
                    <Form.Label>Email address</Form.Label>
                </div>
                    <Form.Control type="email" placeholder="name@example.com" name='email' required/>
                </Form.Group>

                {/* RADIO */}
                {/* <div className="left">
                    <Form.Label>You are :</Form.Label>
                </div>
                <Form.Check className='radios' label="Individual" type="radio" aria-label="radio 1" name='individual' />
                <Form.Check className='radios' label="Company" type="radio" aria-label="radio 1" name='company'/> */}

                {/* RADIO */}
                {/* <div className="left">
                    <Form.Label>What are you interested in?</Form.Label>
                </div>
                    <InputGroup className="mb-3">
                        <DropdownButton
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-1">
                        <Dropdown.Item className="drop" href="#" name='Front-End'>Front-End</Dropdown.Item>
                        <Dropdown.Item className="drop" href="#" name='full-Stack'>Full-Stack</Dropdown.Item>
                        <Dropdown.Item className="drop" href="#" name='SEO and Ads'>SEO and Ads</Dropdown.Item>
                        <Dropdown.Item className="drop" href="#" name='Branding'>Branding</Dropdown.Item>
                        <Dropdown.Item className="drop" href="#" name='other'>Other</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup> */}

                {/* MSSG */}
                <div className="left">
                    <Form.Label>Write me:</Form.Label>
                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control className="textbox" as="textarea" rows={3} name='message'/>
                </Form.Group>
                <div className="btn-send"><button type="submit">Submit</button></div>
            </Form>
            </div>
        </div>   
        
    </>
  )
}
