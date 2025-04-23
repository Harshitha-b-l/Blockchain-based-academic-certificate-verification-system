import React, { Component } from "react";
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      course: "",
      email: "",
      certId: "",
      errorMessage: "",
    };
  }

  canBeSubmitted() {
    const { fname, lname, course, email, certId } = this.state;
    return (
      fname.length > 0 &&
      lname.length > 0 &&
      course.length > 0 &&
      email.length > 0 &&
      certId.length > 0
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addcertificate = async (event) => {
    event.preventDefault();
    try {
      await this.props.addcertificate(this.state);
      this.setState({ errorMessage: "" });
    } catch (error) {
      console.error("Error submitting certificate:", error);
      this.setState({ errorMessage: "There was an error submitting the certificate." });
    }
  };

  render() {
    const { errorMessage } = this.state;
    const isEnabled = this.canBeSubmitted();

    return (
      <div className="container-fluid" style={{ minHeight: "100vh", background: "#e6e6fa" }}>
        {/* Blockchain Info Section */}
        <Container fluid className="py-5 text-center bg-secondary text-white">
          <h1 className="mb-4" style={{ fontFamily: "Montserrat", fontWeight: "bold" }}>
             Certificate Management Using Blockchain
          </h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "18px" }}>
          "Ensuring Trust, Security, and Transparency—A Tamper-Proof Blockchain Solution for Instant and Reliable Certificate Verification."
          </p>
        </Container>

        {/* Characteristics Section */}
        <Container className="py-5">
          <h2 className="text-center mb-4" style={{ fontFamily: "Montserrat", fontWeight: "bold" }}>
            Characteristics of Blockchain Technology
          </h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                <Card.Title className="text-black">Security and Integrity</Card.Title>
                  <Card.Text>
                  Certificates are stored on a tamper-proof blockchain ledger. Cryptographic hashing ensures data integrity, preventing unauthorized modifications.

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-black">Decentralization
                  </Card.Title>
                  <Card.Text>
                  No single entity controls the system, reducing the risk of fraud. Trust is distributed across multiple nodes in the blockchain network.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-black">Transparency & Immutability</Card.Title>
                  <Card.Text>
                  Certificates once recorded cannot be altered or deleted. All transactions are transparent and verifiable by anyone with access.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-black"> Instant & Automated Verification</Card.Title>
                  <Card.Text>
                  Eliminates the need for manual verification by institutions. Employers or institutions can verify certificates in real-time via blockchain records.

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-black">Eliminates Certificate Forgery & Fraud
                  </Card.Title>
                  <Card.Text>
                  Prevents fake or duplicate certificates, as each certificate has a unique cryptographic signature. Reduces cases of fake qualifications and identity fraud.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-black"> Cost & Time Efficiency
                  </Card.Title>
                  <Card.Text>
                  No intermediaries are required for verification, reducing costs. Certificates can be issued and verified instantly, saving time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
<div >
        
        <Container className="py-5 bg-light">
          <div  style={{background: "rgb(132, 143, 185)"}}>
          <h2 className="text-center mb-4" style={{ fontFamily: "Montserrat", fontWeight: "bold", color: "white" }}>
            Enter the Certificate Details
          </h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={this.addcertificate} className="w-75 mx-auto" style={{width:"-1000px"}}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
                placeholder="First name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
                placeholder="Last name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email@email.com"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
                placeholder="Course name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="certId"
                value={this.state.certId}
                onChange={this.handleChange}
                placeholder="Certificate ID (e.g., roll number)"
              />
            </Form.Group>
            <Button  style={{width:"10px"}}
              disabled={!isEnabled}
              className="w-100 mt-3"
              variant="primary"
              type="submit"
            >
              Add Certificate
            </Button>
          </Form>
          </div>
        </Container>
        </div>

        {/* Footer Section */}
        <footer className="bg-dark text-white py-3 text-center">
          <p className="mb-0">&copy; 2024 Blockchain Certificate Management. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default Forms;