import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import axios from "axios";

function FormFloating() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ColName, setColName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [show, setShow] = useState(
    "Fill the form and submit to get a unique code"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, ColName, city, phone, code);
    const data = {
      Name: name,
      Email: email,
      College: ColName,
      City: city,
      Contact: phone,
      Code: code.join(),
    };
    axios
      .post(
        "https://sheet.best/api/sheets/a5bcaa0b-2e30-4b7e-86bb-f98662ee542c",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setCity("");
        setColName("");
        setPhone("");
      });
  };
  return (
    <>
      <div className="fbox">
        <h1 className="header">Register For Campus Ambassador Programme</h1>
        <form onSubmit={handleSubmit} className="formm">
          <FloatingLabel
            controlId="floatingInput"
            label="Full Name"
            className="mb-3 "
          >
            <Form.Control
              type="text"
              placeholder="Full Name"
              className="input"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 
        "
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="College Name"
            className="mb-3 "
          >
            <Form.Control
              type="text"
              placeholder="College"
              className="input"
              onChange={(e) => setColName(e.target.value)}
              value={ColName}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="City"
            className="mb-3 "
          >
            <Form.Control
              type="text"
              placeholder="City"
              className="input"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Contact No."
            className="mb-3 "
          >
            <Form.Control
              type="tel"
              placeholder="name@example.com"
              className="input"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </FloatingLabel>
        </form>
        <p className="show">{show}</p>

        <Button
          variant="light"
          type="submit"
          className="SubmitBtn"
          disabled={!name | !email | !ColName | !phone | !city}
          onClick={() => {
            var voucher_codes = require("voucher-code-generator");
            const code = voucher_codes.generate({
              length: 5,
            });

            setCode(code);
            setShow("Your Unique Code is " + code);

            console.log(code);
            console.log(code.join());
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default FormFloating;
