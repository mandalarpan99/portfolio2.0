/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ProjectModal } from './ProjectModal';
import { useState } from 'react';
import {Col} from 'react-bootstrap';
export const ShowProjects = (props)=>{
    const [modalShow, setModalShow] = useState(false);
    const limitWords = (str, wordLimit) => {
        const words = str.split(" ");
        return words.length > wordLimit
          ? words.slice(0, wordLimit).join(" ") + "....."
          : str;
      };
      //console.log(props.projectDesc)
      const text = props.projectDesc;
      console.log(text)
    return(
        <>
            {/* <div>
                <h1>{props.projectTitle}</h1>
                <p>{props.projectDesc}</p>
                <a href={props.projectLink} target="_blank">Project Link</a>
                <img src={props.projectImg} alt="project image"/>
            </div> */}
           
            <Col xl={4} md={4} xs={11} className='project-show-area'>
            {/* <div className="align-center-div"> */}
                <div className='projectCard-body'>
                    <div className='Pcard-top'>
                    <img src={props.projectImg} alt='Card backgroud image'/>
                    {/* <div className='aboutcard-img'>
                        <img src="images/profilepic.png" alt="card image" />
                    </div> */}
                    </div>
                        <div className='Pcard_content'>
                            <h2>{props.projectTitle}</h2>
                            <h5>{limitWords(text, 10)}</h5>
                            <div className="Pcard_link">
                                {/* <a href={props.projectLink} className="button" target='_blank'>Project link</a> */}
                                <button className='project-btn' onClick={() => setModalShow(true)}>Details</button>
                                {/* <Button  onClick={() => setModalShow(true)} className='btn'>
                                    Details
                                </Button> */}

                                <ProjectModal
                                    data={props}
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                </Col>
                
        </>
    )
}