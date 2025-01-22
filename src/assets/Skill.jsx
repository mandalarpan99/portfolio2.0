import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
export const Skill = ()=>{
    const name = "< Skill />"
    return(
        <>
            <section id="skill">
                <Container>
                    <div className="divider mb-3"></div>
                    <div className="section-heading">
                        <h1>{name}</h1>
                    </div>
                    <div className='skill-area'>
                        <Row className='align-center'>
                            <Col xs={11} md={4} xl={4}>
                            <div className="skill-set">
                            <p>01</p>
                            <h3>Quick Learning</h3>
                            <p>Quick learning is the ability to grasp new concepts, skills, or technologies swiftly and efficiently. It involves adaptability, curiosity, and a proactive approach to acquiring and applying knowledge in dynamic environments.</p>
                            </div>
                            </Col>
                            <Col xs={11} md={4} xl={4}>
                            <div className="skill-set">
                            <p>02</p>
                            <h3>Communication</h3>
                            <p>Effective communication is the foundation of collaboration, enabling the seamless exchange of ideas and information. It fosters clarity, understanding, and strong relationships, whether in a team setting or with clients.</p>
                            </div>
                            </Col>
                            <Col xs={11} md={4} xl={4}>
                            <div className="skill-set">
                            <p>03</p>
                            <h3>Collaborative</h3>
                            <p>Collaboration is the cornerstone of successful projects, enabling teams to combine diverse perspectives and skills to achieve shared goals. It fosters open communication, mutual support, and innovation, ensuring efficient problem-solving and high-quality outcomes.</p>
                            </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}