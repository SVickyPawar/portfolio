import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
		<Card className="project-card-view">
			<Card.Img variant="top" src={props.imgPath} alt="card-img" />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>
					{props.description}
				</Card.Text>
				<Card.Text style={{ textAlign: "justify" }}>{props.role}</Card.Text>
				<Card.Text style={{ textAlign: "justify" }}>
					Techstack:
					React{<img style={{width:"20px"}} src={props.reactLogo}/>}|
					JavaScript{<img style={{width:"30px"}} src={props.jsLogo}/>}|
					HTML{<img style={{width:"15px"}} src={props.htmlLogo}/>} |
					CSS{<img style={{width:"25px",marginTop:"-5px"}} src={props.cssLogo}/>}
					
					
					</Card.Text>
				{/* <div>
					<img style={{width:"50px"}} src={props.logos}/>
				</div> */}
				<Button variant="primary" href={props.link} target="_blank">
					<BiLinkExternal /> &nbsp;
					{props.isBlog ? "View Blog" : "Project"}
				</Button>
				<Button style={{marginLeft:"2rem"}} variant="primary" href={props.live} target="_blank">
					<BiLinkExternal />&nbsp;
					Link
				</Button>
			</Card.Body>
		</Card>
	);
}
export default ProjectCards;
