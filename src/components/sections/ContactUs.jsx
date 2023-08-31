import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { ContactUsLabels } from '../Content'

const ContactUs = () => {
    return (
        <section className="w-full h-auto flex justify-center items-center font-krub">
            <div className="lg:px-6 md:px-4 w-3/5 px-3">
                <div className="flex flex-col w-full bg-white gap-4 shadow relative rounded-lg lg:p-6 md:p-4 m-3">
                    <h1 className="text-[#006BC0] text-5xl font-light text-center">{ContactUsLabels.heading}</h1>
                    <p className="text-2xl font-light text-center">{ContactUsLabels.description}</p>
                    <Form className="text-base">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="contactUsFirstName">
                                <Form.Label>{ContactUsLabels.form.firstname}<span className="text-[#ff0000]">*</span></Form.Label>
                                <Form.Control type="text" placeholder={ContactUsLabels.form.firstname} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="contactUsLastName">
                                <Form.Label>{ContactUsLabels.form.lastname}<span className="text-[#ff0000]">*</span></Form.Label>
                                <Form.Control type="text" placeholder={ContactUsLabels.form.lastname} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="contactUsEmail">
                                <Form.Label>{ContactUsLabels.form.email}<span className="text-[#ff0000]">*</span></Form.Label>
                                <Form.Control type="email" placeholder={ContactUsLabels.form.email} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="contactUsNumber">
                                <Form.Label>{ContactUsLabels.form.contactno}<span className="text-[#ff0000]">*</span></Form.Label>
                                <Form.Control type="number" placeholder={ContactUsLabels.form.contactno} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="contactUsTime">
                                <Form.Label>{ContactUsLabels.form.time}</Form.Label>
                                <Form.Select defaultValue="9:00am">
                                    <option>9:00am</option>
                                    <option value="9:30am">One</option>
                                    <option value="10:00am">Two</option>
                                    <option value="10:30am">Three</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="contactUsTopic">
                                <Form.Label>{ContactUsLabels.form.topic}</Form.Label>
                                <Form.Select defaultValue="9:00am">
                                    <option>Choose one</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="contactUsMessage">
                            <Form.Label>{ContactUsLabels.form.message}</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <div className="flex items-center">
                        {/* <Row> */}
                            <Form.Group as={Col} className="mb-3" id="contactUsSubscribe">
                                <Form.Check type="checkbox" label={ContactUsLabels.form.subscribe} />
                            </Form.Group>
                            <button className="bg-[#00BCE7] rounded-full text-white px-4 py-2 h-10">Send</button>
                            {/* <Button as={Col} variant="primary" className="h-10" type="submit">
                                Submit
                            </Button> */}
                        {/* </Row> */}
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs