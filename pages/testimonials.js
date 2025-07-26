import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";
import ReadyToEnquire from "@/components/readytoenquire";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";

function Testimonials() {
  return (
    <div>
      <Head>
        <title>VMPics Photography - Client testimonials</title>
        <meta
          name="description"
          content="VMPics Photography - Client testimonials"
        ></meta>
      </Head>

      <Container>
        <center>
          <h3>
            ALL THE LOVE FROM OUR <br></br>AWESOME CLIENTS{" "}
          </h3>
        </center>{" "}
        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn">
          <div>
            <Row>
              <Col sm="12" lg="6" md="6" className="reviewTextRightAlign">
                We recently used Varun&aposs skills for our Gender Reveal Party.
                He is such an amazing person with immense talent in photography.
                He covered all aspects of our event and pictures turned out very
                graceful. All of our friends liked the pictures clicked by Varun
                and will definitely recommend his services to others. Keep it up
                and Thanks for clicking the memories which we can cherish for
                life.
                <br />
                <br />
                <div> - SAMRITI & VARUN</div>
              </Col>

              <Col sm="12" lg="6" md="6">
                <Image
                  src="/images/reviews/samriti-varun.jpg"
                  alt="feedback-from-samriti-varun-maternity-shoot"
                  className="reviewImg rounded"
                  width={200}
                  height={160}
                  sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                  style={{ height: "100%", width: "100%" }} //The point is right there!
                />
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <br />
        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn">
          <div>
            <Row>
              <Col sm="12" lg="6" md="6">
                <Image
                  src="/images/reviews/aman-nikhil.jpg"
                  alt="feedback-from-aman-nikhil-maternity-shoot"
                  className="reviewImg rounded"
                  width={200}
                  height={160}
                  sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                  style={{ height: "100%", width: "100%" }} //The point is right there!
                />
              </Col>
              <Col sm="12" lg="6" md="6" className="reviewTextLeftAlign">
                {" "}
                Hey Varun, Thank you for the beautiful captures and lovely
                edits. From your way of explaining each and every pose, your
                attention to every minute details to make pictures look prefect,
                your patience, to giving comfort and care to your clients, we
                are impressed by everything. We had wonderful experience, fun
                and laughter with you during the shoot. Would definitely
                recommend VMPics Photography to every couple who are looking for
                uniqueness to capture their beautiful journey even in more
                special way. Thank you once again
                <br />
                <br />
                <div> - AMAN & NIKHIL </div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <br />
        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn">
          <div>
            <Row>
              <Col sm="12" lg="6" md="6" className="reviewTextRightAlign">
                Varun was absolute delight to work with, he knew exactly what we
                wanted and captured our family moments with his lenses. He is a
                very talented photographer and I would highly recommend him.
                <br />
                <br />
                <div> - SHIWANEE GAUTAM</div>
              </Col>

              <Col sm="12" lg="6" md="6">
                <Image
                  src="/images/reviews/review6.jpg"
                  alt="feedback-from-shiwanee-gautam-for-family-shoot"
                  className="reviewImg rounded"
                  width={200}
                  height={160}
                  sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                  style={{ height: "100%", width: "100%" }} //The point is right there!
                />
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <br />
        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn">
          <div>
            <Row>
              <Col sm="12" lg="6" md="6">
                <Image
                  src="/images/reviews/review5.jpg"
                  alt="feedback-from-aanchal-prateek-for-maternity-shoot"
                  className="reviewImg rounded"
                  width={200}
                  height={160}
                  sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                  style={{ height: "100%", width: "100%" }} //The point is right there!
                />
              </Col>
              <Col sm="12" lg="6" md="6" className="reviewTextLeftAlign">
                {" "}
                Highy recommended. We narrowed down VM pics (Varun) after going
                through lots of available options out there and he also came
                through as a reference from our close family friend. It was not
                the reference but his variety of work, the natural pictures he
                had on his profile and the affordability which confirmed our
                choice. We shot outdoors and his experience with the light,
                composure and camera work is great. We couldnt just select the
                best out of final pictures and ended up getting all. We highly
                recommend Varun for shoots and cannot speak highly of his work
                ethic. Try him! you wont be disappointed…
                <br />
                <br />
                <div> - AANCHAL AND PRATEEK </div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <br />
        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn">
          <div>
            <Row>
              <Col sm="12" lg="6" md="6" className="reviewTextRightAlign">
                We recently had a newborn baby and were looking for a good and
                reasonably priced photographer to capture some family photos. We
                contacted Varun who did a wonderful job and captured some
                beautiful shots for us. He was at the decided place on time and
                was very patient and accommodating. He had some ideas of how the
                photos could be clicked and discussed it with us and took our
                inputs as well. We loved the outcome and the photos. Thanks a
                lot Varun! <br />
                <br />
                <div> - TEJAL & BIPLAV</div>
              </Col>

              <Col sm="12" lg="6" md="6">
                <Image
                  src="/images/reviews/review1.jpg"
                  width="480"
                  height="360"
                  className="w-full h-auto reviewImg rounded"
                  alt="Family shoot testimonial 1"
                />
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <br />
        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn">
          <div>
            <Row>
              <Col sm="12" lg="6" md="6">
                <Image
                  src="/images/reviews/review2.jpg"
                  width="480"
                  height="360"
                  className="w-full h-auto reviewImg rounded"
                  alt="Family shoot testimonial 1"
                />
              </Col>
              <Col sm="12" lg="6" md="6" className="reviewTextLeftAlign">
                {" "}
                Highy recommended. Time Management and Affordable! photographer
                was patient with my kids and was on to it with his shots! photos
                turned out amazing despite the hot day we eventually got there
                with all my kids. thank you so much VMPics for taking my family
                on this sunset journey. photos are beautiful ❤ <br />
                <br />
                <div> - FATAI HAVILI UHILA </div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <br />
        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn">
          <div>
            <Row>
              <Col sm="12" lg="6" md="6" className="reviewTextRightAlign">
                Thank you for catching our family memories. The photos turned out
                beautifully. You were also very patience with our kids, thank
                you and we highly recommend you. <br />
                <br />
                <div> - KELLIE TO OIZUMI</div>
              </Col>

              <Col sm="12" lg="6" md="6">
                <Image
                  src="/images/reviews/review3.jpg"
                  alt="feedback-from-shiwanee-gautam-for-family-shoot"
                  width="480"
                  height="360"
                  className="w-full h-auto reviewImg rounded"
                />
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <br />
        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn">
          <div>
            <Row>
              <Col sm="12" lg="6" md="6">
                <div>
                  <Image
                    src="/images/reviews/review4.jpg"
                    alt="feedback-from-shiwanee-gautam-for-family-shoot"
                    width="480"
                    height="360"
                    className="w-full h-auto reviewImg rounded"
                  />
                </div>
              </Col>
              <Col sm="12" md="12" lg="6" className="reviewTextLeftAlign">
                We booked Varun for our maternity Photoshoot. He understands
                clients comfort and their preference. He made our shoot not some
                60 min time slot but a wonderfull and memorable experience.
                Their is no doubt that he captures the best golden hours
                pictures and the location is stunning. Also not to forget we got
                our gallery delivered within a week. We cant wait to book Varun
                for more upcoming events. <br />
                <br />
                <div> - KIRTI PARIJA</div>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <br />
        <br />
        <br />
      </Container>
      <ReadyToEnquire />
    </div>
  );
}

export default Testimonials;
