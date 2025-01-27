import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../index.css'
export const ProjectModal = (props)=> {
    //console.log(props.data.projectTitle);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Project details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="project-modal-img">
        <img src={props.data.projectImg} />
        </div>
        <h4>{props.data.projectTitle}</h4>
        <p>
        {props.data.projectDesc}
        </p>
        <a href={props.data.projectLink} className="button" target='_blank'>Project link</a>
      </Modal.Body>
      <Modal.Footer>
        {/* <button className='project-btn'>Close</button> */}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

