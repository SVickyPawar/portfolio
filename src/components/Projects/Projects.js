import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import freshlyhome from "../../Assets/Projects/freshlyhome.png";
import cricket from "../../Assets/Projects/cricket.png";

function Projects() {
	return (
		<div id="projects">
			<Container fluid className="project-section">
				<Particle />
				<Container>
					<h1 className="project-heading">
						My Recent <strong className="purple">Works </strong>
					</h1>
					<p style={{ color: "white" }}>
						Here are a few projects I've worked on recently.
					</p>
					<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
						<Col md={4} className="project-card">
							<ProjectCard
								imgPath={freshlyhome}
								isBlog={false}
								title="freshly"
								description="Freshly is a prepared meal delivery website which offers various types of meal to customers and also provide flexible plans as per the requirements."
								role="Build this wesite from scratch to working prototye. Developed signin, signup, homepage and meal plans."
								stack="TechStack- JavaScript | HTML | CSS"
								link="https://github.com/SVickyPawar/Freshly-Clone"
							/>
						</Col>

						<Col md={4} className="project-card">
							<ProjectCard
								imgPath={cricket}
								isBlog={false}
								title="cricket.com"
								description="cricket.com, a website has all crickets schedule, ongoing match score-card and news related to it around the globe.
							  "
								role="Area of Responsibility: Developed the news page and integrate with frontend. Implemented filter and sorting functionality in it."
								stack="TechStack- ReactJS | JavaScript | HTML | CSS"
								link="https://github.com/SVickyPawar/cricket.com"
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
}

export default Projects;
