import Container  from "react-bootstrap/Container";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { ShowProjects } from "./ShowProjects";
import {Projectlists} from './Projectlists';
export const Project = ()=>{

    const name = "< Project />";
    return(
        <>  
            <section id="project">
                <Container>
                <div className="divider mb-3"></div>
                <div className="section-heading">
                    <h1>{name}</h1>
                </div>
                <div>
                <Row className="align-center">
                {Projectlists.map((val)=>{
                    return(
                    <ShowProjects 
                        key={val.id}
                        projectTitle={val.projectName}
                        projectDesc={val.projectDes}
                        projectLink={val.projectLink}
                        projectImg={val.projectImage}
                    />
                    )
                })}
                </Row>
                </div>
                </Container>
            </section>
        </>
    )
}