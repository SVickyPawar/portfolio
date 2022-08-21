import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "../Skills/Techstack";
import Toolstack from "../Skills/Toolstack";


const Skills=()=>{
  return (
		<div id="skills">
			<Container fluid className="about-section">
				<Particle />
				<Container>
					<Row style={{ justifyContent: "center", padding: "10px" }}></Row>
					<h1 className="project-heading">
						Professional <strong className="purple">Skillset </strong>
					</h1>
					<Techstack />

					<h1 className="project-heading">
						<strong className="purple">Tools</strong> I use
					</h1>
					<Toolstack />
				</Container>
			</Container>
		</div>
	);
}

export default Skills;