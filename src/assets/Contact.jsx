import Container  from "react-bootstrap/Container";
import {Row, Col} from 'react-bootstrap';
export const Contact = ()=>{
    const name = "< Conatct />"
    return(
        <>
        <section id="contact">
            <Container>
        <div className="divider mb-3"></div>
        <div className="section-heading">
                <h1>{name}</h1>
            </div>
        <div className="contact-txt">
            <Row className="align-center">
                <Col xs={11} md={6} xl={6}>
                <div className="contact-des">
                    <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                </div>
                </Col>
                <Col xs={11} md={6} xl={6}>
                <div className="contact-textIN">
                    <h1>Email</h1>
                    <p className="contact-details"><span className='skill-arrow'>➤</span>mandalarpan2014@gmail.com <span className="contact-at">(Recommended)</span></p>
                    <h1>Social</h1>
                    <p className="contact-details"><span className='skill-arrow'>➤</span>Facebook/Instagram ~ <span className="contact-at">@arpanm.in/@arpanmFB</span></p>
                    <h1>LinkedIn</h1>
                    <p className="contact-details">arpanmin <span className="contact-at">(Alwayes active)</span></p>
                    <h1>Address</h1>
                    <p className="contact-details"><span className='skill-arrow'>➤</span>Kolkata, West Bengal, India</p>
                </div>
                </Col>
            </Row>
        </div>
        </Container>
        </section>
        </>
    )
}