import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
export const AboutMe = ()=>{
    const name = "< About />";
    return(
        <>
        <section id='about'>
            <Container>
            <div className="divider mb-3"></div>
            <div className="section-heading">
                <h1>{name}</h1>
            </div>
            <div>
                <Row className='align-center'>
                    <Col xs={11} md={6} xl={6}>
                    <div className="about-me">
                        <p>Hello! I'm <span>Arpan Mandal</span>, a passionate and driven professional with a strong academic foundation in Master of Computer Applications (MCA) and Bachelor of Computer Applications (BCA). I specialize in crafting efficient, scalable, and user-friendly solutions.<br />
                            I pride myself on being a quick learner, a problem-solver, and someone who thrives in collaborative environments. My courage to take on challenges has enabled me to design, develop, and maintain software applications while embracing innovation and staying ahead of industry trends.<br />
                            Beyond technical expertise, I bring a commitment to excellence, adaptability, and continuous growth. Whether working independently or as part of a team, I aim to deliver impactful solutions with creativity, dedication, and a focus on quality.
                            Here are some technologies I am familiar with:
                        </p>
                        <div className="skills-set">
                            <ul>
                                <li><span className='skill-arrow'>➤</span>HTML</li>
                                <li><span className='skill-arrow'>➤</span>CSS</li>
                                <li><span className='skill-arrow'>➤</span>JAVASCRIPT</li>
                                <li><span className='skill-arrow'>➤</span>REACTJS</li>
                                <li><span className='skill-arrow'>➤</span>NODEJS</li>
                            </ul>
                            <ul>
                                <li><span className='skill-arrow'>➤</span>PHP</li>
                                <li><span className='skill-arrow'>➤</span>MONGODB</li>
                                <li><span className='skill-arrow'>➤</span>SQL</li>
                                <li><span className='skill-arrow'>➤</span>GIT</li>
                                <li><span className='skill-arrow'>➤</span>JAVA</li>
                            </ul>
                        </div>
                    </div>
                    </Col>
                    <Col xs={11} md={6} xl={6}>
                    <div className="self-img">
                        <img src="/profile-pic3.png"/>
                    </div>
                    </Col>
                </Row>
            </div>
            </Container>
        </section>
            
        </>
    )
}