import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image';
function About() {
    return <div className='p-5'>
        <Container>
            <Row>
                <Col className='aboutmeText' md="6" lg="6" sm="12">
                    <h4>HI, I AM VARUN</h4> <br />
                    <p>
                        I am a professional photographer specializing in capturing lifes precious moments through my lens.
                        My passion for photography started at a young age, and I have honed my skills over the years to become the photographer I am today.
                        My aim is to provide you with stunning and timeless photos that you can cherish for a lifetime.</p>
                    <p>
                        My photography style is a blend of modern and classic, capturing natural and candid moments while also creating stunning portraits.
                        I specialize in various types of photography, including family portraits, maternity photography, and family events.</p>
                    <p>
                        As you explore my portfolio, you will find a collection of my favorite shots, showcasing my love for capturing natural light and spontaneous moments. I believe that every photograph has a story to tell, and my goal is to capture those stories in the most authentic and beautiful way possible.
                    </p>
                    <p>
                        If you are looking for a photographer who can bring your vision to life, then I would love to work with you. Please feel free to get in touch with me to discuss your photography needs. Thank you for visiting my website!
                    </p>             <br />

                    <p> I have been featured as Shutterturf top family photographers in Sydney. You can read more about it
                        in <a href='https://www.shutterturf.com/blog/family-photographers-sydney' rel="noopener noreferrer"
                            target='_blank'>this article</a></p>
                </Col>
                <Col md="6" lg="6" sm="12">
                    <Image src="/images/aboutme.jpg" alt="about me" className="aboutmeImg" width="450" height="525" ></Image>
                </Col>
            </Row>
        </Container>
    </div>
}

export default About;