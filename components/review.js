import Image from "next/image";
import { Carousel, Col, Row} from "react-bootstrap";

export default function Review(){
  const content = [{
    desc: `He is such an amazing person with immense talent in photography.
                He covered all aspects of our event and pictures turned out very
                graceful. All of our friends liked the pictures clicked by Varun
                and will definitely recommend his services to others. Keep it up
                and Thanks for clicking the memories which we can cherish for
                life.`,
    picPath : "/images/reviews/samriti-varun.jpg",
    altText : "feedback-from-samriti-varun-maternity-shoot",
    title : "SAMRITI & VARUN"
  }
];
    return (
        <Carousel> 
          <Carousel.Item>
          <div>
            <Row>
              <Col sm="12" lg="6" md="6" className="reviewTextRightAlign">
                We recently used Varun&apos;s skills for our Gender Reveal Party.
                
                <br />
                <br />
                <div> - </div>
              </Col>

              <Col sm="12" lg="6" md="6">
                <Image
                  src=""
                  alt=""
                  className="reviewImg rounded"
                  width="480"
                  height="360"
                  sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                  style={{ height: "100%", width: "100%" }} //The point is right there!
                />
              </Col>
            </Row>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div>
            <Row>
              <Col sm="12" lg="6" md="6">
                <Image
                  src="/images/reviews/aman-nikhil.jpg"
                  alt="feedback-from-aman-nikhil-maternity-shoot"
                  className="reviewImg rounded"
                  width="480"
                  height="360"
                  sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                  style={{ height: "100%", width: "100%" }} //The point is right there!
                />
              </Col>
              <Col sm="12" lg="6" md="6" 
              className="reviewTextLeftAlign">
                Thank you for the beautiful captures and lovely
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
          </Carousel.Item>
          <Carousel.Item>
          <div>
            <Row>
              <Col sm="12" lg="6" md="6" className="reviewTextRightAlign">
                Thankyou for catching our family memories. The photos turned out
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
          </Carousel.Item>
        </Carousel>
      );
}