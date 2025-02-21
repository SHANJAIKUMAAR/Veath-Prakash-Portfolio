import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I fell in love with data and the insights it can unlock.Over time,
              I have learned to transform raw numbers into meaningful stories...
              📊🔍
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  SQL and Python with a strong command of libraries like Pandas,
                  NumPy, and Matplotlib for data analysis and visualization.{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">data analytics, machine learning,</b> and
                also in areas related to{" "}
                <b className="purple">
                  forecasting, helping businesses make data-driven decisions.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my skills to solve real-world
              problems using
              <i>
                <b className="purple">
                  {" "}
                  Power BI, Tableau, and Excel, creating intuitive dashboards
                </b>
              </i>
              &nbsp; and
              <i>
                <b className="purple">
                  {" "}
                  reports that drive impactful decisions.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p>prakashveath@gmail.com</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/veathprakash"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/veath-prakash-b-95b066227/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
