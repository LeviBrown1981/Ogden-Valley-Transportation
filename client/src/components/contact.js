import React from "react";
import styled from "styled-components";
import { Form, } from "semantic-ui-react";
import { StyledButton, StyledHeader, } from "../styles/shared";

const Contact = () => (
<div>
    <StyledHeader as="h1">Contact Me</StyledHeader>
    <br />
    <Form action="https://formspree.io/your@email.com" method="POST">
      <StyledInput 
        label="Name"
        placeholder="Name"
        type="text"
        name="name"
      />
      <StyledInput 
        label="Email"
        placeholder="Email"
        type="email"
        name="email"
      />
      <StyledInput 
        label="Subject"
        placeholder="Subject"
        type="text"
        name="subject"
      />
      <StyledTextArea
        label="Message"
        placeholder="Message"
        type="text"
        name="message"
      />
      <StyledButton type="submit">Submit</StyledButton>
    </Form>
  </div>
);

const StyledInput = styled(Form.Input)`
  & > label {
    color: white !important;
    font-family: 'Audiowide', cursive;
  }

  & > div {
    & > input {      
      background: #1c1c1d !important;
      color: white !important;
    }
  }
`;

const StyledTextArea = styled(Form.TextArea)`
  & > label {
    color: white !important;
    font-family: 'Audiowide', cursive;
  }

  & > textarea {      
    background: #1c1c1d !important;
    height: 200px;
    color: white !important;
  }
`;

export default Contact;
