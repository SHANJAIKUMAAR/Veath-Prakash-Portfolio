import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Netflix from "../../Assets/Projects/Netflix.jpeg";
import HR from "../../Assets/Projects/HR.jpeg";
import AIRBNB from "../../Assets/Projects/AIRBNB.png";
import pdf from "../../Assets/AIRBNB.pdf";

function Projects() {
  return (
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
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Dashboard"
              description="The Netflix Dashboard provides insights into viewer trends, content performance, and revenue analysis.
It leverages Excel for data preprocessing, MySQL for efficient data storage and retrieval, and Power BI for visualization.
Key metrics include watch time, subscriber growth, and genre popularity to support business decisions.
This dashboard helps analyze patterns and optimize content strategy based on user engagement."
              ghLink="https://github.com/veathprakash/Netflix-Dashboard-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HR}
              isBlog={false}
              title="HR analytics Dashboard"
              description="The HR Analytics Dashboard provides insights into workforce trends, employee performance, and retention rates.
It utilizes Excel for data cleaning, MySQL for database management, and Tableau for interactive visualizations.
Key metrics include employee attrition, hiring trends, and department-wise performance analysis.
This dashboard helps HR teams make data-driven decisions to improve workforce efficiency and engagement."
              ghLink="https://github.com/veathprakash/HR-ANALYTICS-DASHBOARD-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={AIRBNB}
              isBlog={false}
              title="Air BnB Properties"
              description="The Airbnb Properties Dashboard analyzes property trends, pricing patterns, and customer preferences.
It leverages Python with Pandas for data processing, Matplotlib for visualizations, and Seaborn for statistical insights.
Key metrics include average pricing, occupancy rates, and location-based demand analysis.
This dashboard helps hosts and investors make data-driven decisions to optimize rental performance."
              ghLink="https://github.com/veathprakash/AIR-BNB-"
              demoLink={pdf}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
