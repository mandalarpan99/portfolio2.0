import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import '../index.css';
export const Home = ()=>{
    let name = "< Arpan Mandal />";
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Programmer", "Full-Stack Developer", "Software Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
    return(
        <>
            <section id="home">
                <Container>
                <div className="home-container">
                    {/* Sidebar */}
                    <div className="sidebar">
                        <ul className="social-icons">
                        <li>
                            <a href="https://www.facebook.com/arpanmFB/" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/arpanm.in/" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/arpanmin/" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/mandalarpan99" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-github"></i>
                            </a>
                        </li>
                        {/* <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                            </a>
                        </li> */}
                        </ul>
                        <div className="follow-me-label">
                        <span>FOLLOW ME</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="main-content">
                        <h4>Hello! I am</h4>
                        <h1>{name}</h1>
                        <h1>&lt;<span className="txt-rotate" dataPeriod="1000" data-rotate='["Programmer", "Full-Stack Developer", "Software Engineer"]'>{text}</span>/&gt;</h1>
                        {/* <h4>Full Stack Developer</h4>
                        <p>Web Developer • Programmer • Software Engineer</p> */}
                        {/* <div className="buttons">
                        <button className="btn get-resume">Get Resume</button>
                        <button className="btn about-me">About Me</button>
                        </div> */}
                    </div>
                </div>
                
                </Container>
            </section>
        </>
    )
}