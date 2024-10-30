import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Head from "next/head";

function Investment() {
  return (
    <div className="container">
      <Head>
        <title>VMPics photography Packages</title>
        <meta
          name="description"
          content="Photography packages for your family shoots"
        ></meta>
      </Head>
      <h3>INVESTMENT</h3>
      <p>Your investment for lifetime memories.</p>
      <div className="row">
        <div className="card mb-3 p-0" style={{ maxWidth: "700px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <div className="text-center img-fluid pricingcard">
                <Image
                  src={"/images/potrait.jpg"}
                  className="rounded"
                  alt="potrait-photography"
                  width={300}
                  height={400}
                />
                <Nav.Link
                  className="btn"
                  style={{ width: "140px" }}
                  href="/clientgallery"
                >
                  {" "}
                  View Gallery
                </Nav.Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">VMPICS MINI</h5>
                <p class="card-text">
                  - Price : $200 <br />
                  - Session Duration : 30 minutes
                  <br />
                  - Personalized client gallery to view photos
                  <br />
                  - Included digital edited images : 5 <br />
                  - 5-7 days of turn-around time
                  <br />
                  - Extra photos for $20 each <br />
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              <div className="card-footer">
                <Nav.Link
                  className="btn btn-dark"
                  style={{
                    margin: "1px",
                    display: "inline-block",
                    padding: "6px",
                    width: "176px",
                    color: "white",
                  }}
                  href="/contact"
                >
                  Book a session
                </Nav.Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 p-0" style={{ maxWidth: "700px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <div className="text-center img-fluid pricingcard">
                <Image
                  src={"/images/family2.jpg"}
                  className="rounded"
                  alt="family-photo-session"
                  width={600}
                  height={400}
                />
                <Nav.Link
                  className="btn"
                  style={{ width: "140px" }}
                  href="/clientgallery"
                >
                  View Gallery
                </Nav.Link>
              </div>
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>VMPics Digital</Card.Title>
                <Card.Text>
                  - Price : $350 <br />
                  - Session Duration : 60 minutes
                  <br />
                  - Personalized client gallery to view photos
                  <br />
                  - Included digital edited images : 25
                  <br />
                  - 14 days of turn-around time
                  <br />
                  - Extra photos for $20 each
                  <br />
                  <br />
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Nav.Link
                  className="btn btn-dark"
                  style={{
                    margin: "1px",
                    display: "inline-block",
                    padding: "6px",
                    width: "176px",
                    color: "white",
                  }}
                  href="/contact"
                >
                  Book a session
                </Nav.Link>
              </Card.Footer>
            </div>
          </div>
        </div>
        <div className="card mb-3 p-0" style={{ maxWidth: "700px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <div className="text-center img-fluid pricingcard">
                <Image
                  src={"/images/packages-vmpics-gold-plus.jpg"}
                  className="rounded"
                  alt="packages-vmpics-session-goldplus"
                  width={600}
                  height={400}
                />

                <Nav.Link
                  className="btn"
                  style={{ width: "140px" }}
                  href="/clientgallery"
                >
                  View Gallery
                </Nav.Link>
              </div>
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>VMPics Digital+ (Most recommended)</Card.Title>
                <Card.Text>
                  - Price : $450 <br />
                  - Session Duration : 60 minutes
                  <br />
                  - Personalized client gallery to view photos
                  <br />
                  - Included digital edited images : 30
                  <br />
                  - $50 Shop credit included
                  <br />
                  - 14 days of turn-around time
                  <br />
                  - Extra photos for $20 each
                  <br />
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Nav.Link
                  className="btn btn-dark"
                  style={{
                    margin: "1px",
                    display: "inline-block",
                    padding: "6px",
                    width: "176px",
                    color: "white",
                  }}
                  href="/contact"
                >
                  Book a session
                </Nav.Link>
              </Card.Footer>
            </div>
          </div>
        </div>
        <div className="card mb-3 p-0" style={{ maxWidth: "700px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <div className="text-center img-fluid pricingcard">
                {/* <Card.Img src={require("../images/maternity.jpg")} style={{ maxWidth: '395px' }} alt="platinum" /> */}

                <Image
                  src={"/images/packages-vmpics-max.jpg"}
                  className="rounded"
                  alt="packages-vmpics-max"
                  width={600}
                  height={400}
                />
                <Nav.Link
                  className="btn"
                  style={{ width: "140px" }}
                  href="/clientgallery"
                >
                  View Gallery
                </Nav.Link>
              </div>
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>VMPics Max</Card.Title>
                <Card.Text>
                  - Price : $700 <br />
                  - Session Duration : 75 minutes <br />
                  - Personalized client gallery to view photos
                  <br />
                  - Included digital edited images : Complete gallery
                  <br />
                  - 14 days of turn-around time
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Nav.Link
                  className="btn btn-dark"
                  style={{
                    margin: "1px",
                    display: "inline-block",
                    padding: "6px",
                    width: "176px",
                    color: "white",
                  }}
                  href="/contact"
                >
                  Book a session
                </Nav.Link>
              </Card.Footer>
            </div>
          </div>
        </div>
        <div className="card mb-3 p-0" style={{ maxWidth: "700px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <div className="text-center img-fluid pricingcard">
                <Image
                  src={"/images/package-vmpics-max-plus.jpg"}
                  className="rounded"
                  alt="maternity-family-photo-session-platinum-plus"
                  width={600}
                  height={400}
                />

                <Nav.Link
                  className="btn"
                  style={{ width: "140px" }}
                  href="/clientgallery"
                >
                  View Gallery
                </Nav.Link>
              </div>
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>VMPics Max+(Best value)</Card.Title>
                <Card.Text>
                  - Price : $750 <br />
                  - Session Duration : 75 minutes
                  <br />
                  - $100 Shop credit included
                  <br />
                  - Personalized client gallery to view photos
                  <br />
                  - Included digital edited images : Complete gallery
                  <br />
                  - 14 days of turn-around time for the digitals
                  <br />
                  <br />
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Nav.Link
                  className="btn btn-dark"
                  style={{
                    margin: "1px",
                    display: "inline-block",
                    padding: "6px",
                    width: "176px",
                    color: "white",
                  }}
                  href="/contact"
                >
                  Book a session
                </Nav.Link>
              </Card.Footer>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div style={{ textAlign: "left" }}>
        <b>Terms & Conditions</b>
        <ul>
          <li>
            A 30% retainer(non-refundable deposit) is required to book a
            session. Remaining amount is due on the session day.
          </li>
          <li>Travel fee is applied to shooting locations more than 20 Kms.</li>
          <li>Price is subject to change.</li>
          <li>RAW photos cannot be shared for any of the packages.</li>
        </ul>
      </div>
    </div>
  );
}

export default Investment;
