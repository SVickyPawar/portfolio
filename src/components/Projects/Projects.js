import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import freshlyhome from "../../Assets/Projects/freshlyhome.png";
import cricket from "../../Assets/Projects/cricket.png";
import jsLogo from "../../Assets/js_logo.png"
import reactLogo from "../../Assets/react_logo.png";
import htmlLogo from "../../Assets/html_logo.png";
import cssLogo from "../../Assets/css_logo.png";
import simpleStore from "../../Assets/Projects/simpleStore.png";

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
								htmlLogo={htmlLogo}
								cssLogo={cssLogo}
								jsLogo={jsLogo}
								reactLogo={reactLogo}
								link="https://github.com/SVickyPawar/Freshly-Clone"
								live="https://freshly-clone-1.netlify.app/"
							/>
						</Col>

						<Col md={4} className="project-card">
							<ProjectCard
								imgPath={cricket}
								isBlog={false}
								title="cricket.com"
								description="cricket.com, a website has all crickets schedule, ongoing match score-card and news related to it around the globe."
								role="Area of Responsibility: Developed the news page and integrate with frontend. Implemented filter and sorting functionality in it."
								stack="TechStack- ReactJS | JavaScript | HTML | CSS"
								reactLogo={reactLogo}
								jsLogo={jsLogo}
								cssLogo={cssLogo}
								htmlLogo={htmlLogo}
								link="https://github.com/SVickyPawar/cricket.com"
								live="https://cricket-com.vercel.app/"
							/>
						</Col>

						<Col md={4} className="project-card">
							<ProjectCard
								imgPath={simpleStore}
								isBlog={false}
								title="Simple Store"
								description="A resource planning web app to get the updates on remaining stock at store. By this user able to pre-order the stocks as per the requirement."
								role="Area of Responsibility: Developed the whole backend. Involvement in UI development"
								stack="TechStack- ReactJS | JavaScript | HTML | CSS"
								reactLogo={reactLogo}
								jsLogo={jsLogo}
								cssLogo={cssLogo}
								htmlLogo={htmlLogo}
								link="https://github.com/SVickyPawar/SimpleStore"
								live="https://simple-store-project-hackathon.netlify.app/"
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
}

export default Projects;
