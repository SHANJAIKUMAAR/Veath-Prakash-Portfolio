import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiGit } from "react-icons/di";
import { SiMysql, SiNumpy, SiPandas } from "react-icons/si";
import { FaRegFileExcel,FaChartPie } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaRegFileExcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FcStatistics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p style={{ fontSize: "36px" }}>SEABORN</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartPie />
      </Col>
    </Row>
  );
}

export default Techstack;
