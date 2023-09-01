import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { ContactUsLabels } from '../Content'
import validator from 'validator'

const ContactUs = () => {
    const [validated, setValidated] = useState(false);

    const [firstNameErrorLabel, setFirstNameErrorLabel] = useState("")
    const [lastNameErrorLabel, setLastNameErrorLabel] = useState("")
    const [emailErrorLabel, setEmailErrorLabel] = useState("")
    const [phoneErrorLabel, setPhoneErrorLabel] = useState("")

    const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }

            let firstNameElement = document.getElementById("contactUsFirstName")
            if (validator.matches(firstNameElement.value, /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/)) {
                firstNameElement.setCustomValidity("");
            } else {
                firstNameElement.setCustomValidity("Enter valid first name");
                setFirstNameErrorLabel('Please enter valid name')
            }

            let lastNameElement = document.getElementById("contactUsLastName")
            if (validator.matches(lastNameElement.value, /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/)) {
                lastNameElement.setCustomValidity("");
            } else {
                lastNameElement.setCustomValidity("Enter valid first name");
                setLastNameErrorLabel('Please enter valid name')
            }

            let emailElement = document.getElementById("contactUsEmail")
            if (validator.isEmail(emailElement.value)) {
                emailElement.setCustomValidity("");
            } else {
                emailElement.setCustomValidity("Enter valid email");
                setEmailErrorLabel('Please enter valid email')
            }

            let phoneElement = document.getElementById("contactUsPhone")
            if (validator.isMobilePhone(phoneElement.value)) {
                phoneElement.setCustomValidity("");
            } else {
                phoneElement.setCustomValidity("Enter valid number");
                setPhoneErrorLabel('Please enter valid phone number')
            }


            setValidated(true);
        };


    return (
        <section className="w-full flex flex-col justify-center items-center lg:py-40 py-20">
            <span id="contactUs">&nbsp;</span>
            <div className="flex lg:px-6 md:px-4 lg:w-3/5 px-3">
                <div className="flex flex-col w-full bg-white gap-6 shadow rounded-lg lg:p-30 md:p-20 p-4">
                    <h1 className="text-[#006BC0] md:text-5xl text-4xl font-light text-center">{ContactUsLabels.heading}</h1>
                    <p className="md:text-2xl text-xl font-light text-center md:mx-20">{ContactUsLabels.description}</p>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="md:text-xl text-sm">
                        <Row>
                            <Col sm className="mb-3">
                                <Form.Group controlId="contactUsFirstName">
                                    <Form.Label>{ContactUsLabels.form.firstname}<span className="text-[#ff0000]">*</span></Form.Label>
                                    <Form.Control required type="text" placeholder={ContactUsLabels.form.firstname} />
                                    <Form.Control.Feedback type="invalid" id="firstname-invalid-label">
                                        {firstNameErrorLabel}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm className="mb-3">
                                <Form.Group controlId="contactUsLastName">
                                    <Form.Label>{ContactUsLabels.form.lastname}<span className="text-[#ff0000]">*</span></Form.Label>
                                    <Form.Control required type="text" placeholder={ContactUsLabels.form.lastname} />
                                    <Form.Control.Feedback type="invalid" id="lastname-invalid-label">
                                        {lastNameErrorLabel}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm className="mb-3">
                                <Form.Group as={Col} controlId="contactUsEmail">
                                    <Form.Label>{ContactUsLabels.form.email}<span className="text-[#ff0000]">*</span></Form.Label>
                                    <Form.Control required type="email" placeholder={ContactUsLabels.form.email} />
                                    <Form.Control.Feedback type="invalid" id="email-invalid-label">
                                        {emailErrorLabel}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm className="mb-3">
                                <Form.Group as={Col} controlId="contactUsPhone">
                                    <Form.Label>{ContactUsLabels.form.contactno}<span className="text-[#ff0000]">*</span></Form.Label>
                                    <Form.Control required type="tel" placeholder={ContactUsLabels.form.contactno} />
                                    <Form.Control.Feedback type="invalid" id="phone-invalid-label">
                                        {phoneErrorLabel}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm className="mb-3">
                                <Form.Group as={Col} controlId="contactUsTime">
                                    <Form.Label>{ContactUsLabels.form.time}</Form.Label>
                                    <Form.Select defaultValue="9:00am">
                                        <option>9:00am</option>
                                        <option value="1">9:30am</option>
                                        <option value="2">10:00am</option>
                                        <option value="3">10:30am</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col sm className="mb-3">
                                <Form.Group as={Col} controlId="contactUsTopic">
                                    <Form.Label>{ContactUsLabels.form.topic}</Form.Label>
                                    <Form.Select defaultValue="9:00am">
                                        <option>Choose one</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="contactUsMessage">
                            <Form.Label>{ContactUsLabels.form.message}</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <div className="flex items-center">
                            <Form.Group as={Col} className="mb-3" id="contactUsSubscribe">
                                <Form.Check type="checkbox" label={ContactUsLabels.form.subscribe} />
                            </Form.Group>
                            <button type="submit" className="bg-[#00BCE7] rounded-full text-white px-4 py-2 h-10">Send</button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs