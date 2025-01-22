/* eslint-disable react/prop-types */
import {Col} from 'react-bootstrap';
export const ShowProjects = (props)=>{
    return(
        <>
            {/* <div>
                <h1>{props.projectTitle}</h1>
                <p>{props.projectDesc}</p>
                <a href={props.projectLink} target="_blank">Project Link</a>
                <img src={props.projectImg} alt="project image"/>
            </div> */}
                <Col xl={4} md={4} xs={11} className='align-center'>
                <div className='projectCard-body'>
                    <div className='Pcard-top'>
                    <img src={props.projectImg} alt='Card backgroud image'/>
                    {/* <div className='aboutcard-img'>
                        <img src="images/profilepic.png" alt="card image" />
                    </div> */}
                    </div>
                        <div className='Pcard_content'>
                            <h2>{props.projectTitle}</h2>
                            <h5>{props.projectDesc}</h5>
                            <div className="Pcard_link">
                                <a href={props.projectLink} className="button">Project link</a>
                            </div>
                        </div>
                </div>
                </Col>
        </>
    )
}