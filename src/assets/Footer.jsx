import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';

export const Footer = ()=>{
    return(
        <>
        <footer>
            <section id="footer">
                <Container>
                <div className="profile_footer">
                <div className="divider mb-3"></div>
                    <div className="footer_content">
                        <Row>
                            <Col xl={6} md={6} xs={5} className='footer-name'>
                                <p>Arpan Mandal &copy; 2026. All rights reserved.</p>
                            </Col>
                            <Col xl={3} md={3} xs={3} className='footer-love'>
                                <p>Made with <span className='love_symble'>&#10084;</span></p>
                            </Col>
                            <Col xl={3} md={3} xs={4}>
                            <div className="footer_icons">
                                {/* <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                                <i class="fa-brands fa-github"></i> */}
                                <a href="https://www.facebook.com/arpanmFB/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/arpanm.in/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/arpanmin/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/mandalarpan99" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                </Container>
            </section>
            </footer>
        </>
    )
}



