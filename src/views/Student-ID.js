import React, { useState } from "react";
import './Student-ID.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function MyComponent() {
    return (
        <Container>
            <Row>
                <Col md={6}>This is half width on medium screens.</Col>
                <Col md={6}>This is the other half.</Col>
            </Row>
        </Container>
    );
}


const StudentID = () => {

    const [userName , setUserName] = useState('');
    const [id , setID] = useState('');
    const [className , setClassName] = useState('');
    const [NRC , setNRC] = useState('');
    const [email , setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [emergencyPhone,setEmergencyPhone] = useState('');
    const [day,setDay] = useState("");//for days in Date of Birth
    const [month,setMonth] = useState("");//for month ||
    const [year,setYear] = useState("");//for year
    const years = Array.from({ length: 2006 - 1950 + 1 }, (_, i) => 1950 + i); //for loop years

    return(
        <>
      <Container className="bg-info mt-3">
        <Row>
            <Col lg='7' className="border border-danger mr-2">
            <Form className="mt-2" >

            <div className="form-group">
                <Row>
           <Col lg='3'> <label htmlFor="exampleInputText">Text Input</label></Col>
          <Col lg='9' >  <input type="text" className="form-control" id="exampleInputText" placeholder="Enter text here" />
          </Col> </Row>
        </div>
        </Form>
            </Col>
            <Col lg='1'></Col>
            <Col lg='4' className="border border-danger">World</Col>
        </Row>
      </Container>
        </>
    )

}
export default StudentID;