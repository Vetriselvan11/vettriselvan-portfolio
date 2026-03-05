import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                   Java,JavaScript,MySql and Sql{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
             I also use tools like Figma for
              <i>
                <b className="purple">
                  {" "}
                 UI design, VS Code for development, and GitHub,{" "}
                </b>
              </i>
             for version control and project collaboration.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Tailwind CSS </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                {/* <b className="purple">Next.js</b>. */}
              </i>
            </p>
            
            <p className="home-about-body">
           As a fresher, I’m eager to improve my skills, work on real-world projects, and grow as a developer while contributing to building efficient and scalable applications.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
