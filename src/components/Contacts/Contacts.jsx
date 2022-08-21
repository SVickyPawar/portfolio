import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contacts = () => {

  return (
		<div id="contact">
			<Container fluid className="home-about-section" id="about">
				<Particle />

				<Container>
					<Row>
						<Col md={12} className="home-about-social">
							<h1>FIND ME ON</h1>
							<p>
								Feel free to <span className="purple">connect </span>with me
							</p>
							<ul className="home-about-social-links">
								<li className="social-icons">
									<a
										href="https://github.com/SVickyPawar"
										target="_blank"
										rel="noreferrer"
										className="icon-colour  home-social-icons"
									>
										<AiFillGithub />
									</a>
								</li>
								<li className="social-icons">
									<a
										href="https://twitter.com/SVicky006"
										target="_blank"
										rel="noreferrer"
										className="icon-colour  home-social-icons"
									>
										<AiOutlineTwitter />
									</a>
								</li>
								<li className="social-icons">
									<a
										href="https://www.linkedin.com/in/vbpawar/"
										target="_blank"
										rel="noreferrer"
										className="icon-colour  home-social-icons"
									>
										<FaLinkedinIn />
									</a>
								</li>
								<li className="social-icons">
									<a
										href="https://www.instagram.com/i_m_s.vicky/"
										target="_blank"
										rel="noreferrer"
										className="icon-colour home-social-icons"
									>
										<AiFillInstagram />
									</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
   
}

export default Contacts;