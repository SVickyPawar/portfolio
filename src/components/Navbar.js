import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import pdf from "../Assets/Vivek_Pawar_resume.pdf";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const handleResumeClick = () => {
    window.open(pdf, "_blank");
    // initiate download
    const link = document.createElement("a");
    link.href = pdf;
    const fileName = "Vivek_Pawar_resume.pdf"; // specify the filename here
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  };

  return (
		<Navbar
			expanded={expand}
			fixed="top"
			expand="md"
			className={navColour ? "sticky" : "navbar"}
		>
			<Container>
				{/* <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand> */}
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => {
						updateExpanded(expand ? false : "expanded");
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Item style={{ cursor: "pointer" }}>
							<Nav.Link
								as={Link}
								to="home"
								onClick={() => updateExpanded(false)}
							>
								<AiOutlineHome style={{ marginBottom: "2px" }} /> Home
							</Nav.Link>
						</Nav.Item>

						<Nav.Item style={{ cursor: "pointer" }}>
							<Nav.Link
								as={Link}
								to="about"
								onClick={() => updateExpanded(false)}
							>
								<AiOutlineUser style={{ marginBottom: "2px" }} /> About
							</Nav.Link>
						</Nav.Item>

						<Nav.Item style={{ cursor: "pointer" }}>
							<Nav.Link
								as={Link}
								to="skills"
								onClick={() => updateExpanded(false)}
							>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: "2px" }}
								/>{" "}
								Skills
							</Nav.Link>
						</Nav.Item>

						<Nav.Item style={{ cursor: "pointer" }}>
							<Nav.Link
								as={Link}
								to="projects"
								onClick={() => updateExpanded(false)}
							>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: "2px" }}
								/>{" "}
								Projects
							</Nav.Link>
						</Nav.Item>


						<Nav.Item style={{ cursor: "pointer" }}>
							<Nav.Link
								as={Link}
								to="contact"
								onClick={() => updateExpanded(false)}
							>
								<CgFileDocument style={{ marginBottom: "2px" }} /> Contacts
							</Nav.Link>
						</Nav.Item>
						<Nav.Item style={{ cursor: "pointer" }}>
							<Nav.Link
								as={Link}
								to="resume"
								onClick={() => {updateExpanded(false);handleResumeClick()}}
							>
								<CgFileDocument style={{ marginBottom: "2px" }} /> Resume
							</Nav.Link>
						</Nav.Item>

						{/* <Nav.Item>
              <Nav.Link
                href="https://blogs.soumya-jit.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

						{/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/SVickyPawar"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
