import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Nav from 'react-bootstrap/Nav';

function ReadyToEnquire() {
    return <div className='readyToEnquireDiv'>
        <Row>
            <Col md-6 lg-6 sm-12>
                <Image src="/images/readytobook.jpg"
                    alt="ready-to-book-photography-session"
                    className='readyToBookImg'
                    width={730} height={584} />
            </Col>

            <Col sm-12 md-6 lg-6>
                <br />
                <div className="readyToEnquireFont">
                    <span style={{ fontSize: '50px' }}>READY TO ENQUIRE? </span>
                    <h5>WE WOULD LOVE TO HEAR FROM YOU</h5>
                    |<br />
                    <br />
                    <Nav.Link className="btn" href="/contact">GET IN TOUCH</Nav.Link>
                    <br />
                    <br />
                </div>
            </Col>
        </Row>
    </div>
}

export default ReadyToEnquire;