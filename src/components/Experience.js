import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";

const experienceData = [
    {
        company: "Hitachi Payment Services Pvt Ltd",
        role: "DBU Operation Data Analyst",
        duration: "1+ Year",
        type: "Full-time",
        highlights: [
            "Automated KPI dashboards and MIS reports using SQL, Power BI, and Excel — improving reporting efficiency by 50%",
            "Automated SQL Stored Procedures and built a Python-based ETL pipeline using SQLAlchemy to import data from Excel into SQL Server, reducing manual effort and improving time efficiency by 70%, while also cutting reporting turnaround time by 60%",
            "Automated distance calculation using Google Sheets App Script, eliminating ₹5–8 lakhs/month in operational costs",
            "Performed data extraction and aggregation using Advanced SQL (Joins, CTEs, Window Functions) for structured daily/monthly reporting",
            "Built scalable MIS frameworks and performance trackers to support cross-functional business monitoring",
            "Conducted root cause analysis on operational data to identify inefficiencies and recommend process improvements",
            "Ensured data accuracy across multiple reports through validation and quality checks, collaborating with operations and finance teams",
        ],
        metrics: [
            { value: "50%", label: "Reporting Efficiency" },
            { value: "70%", label: "Manual Effort Reduced" },
            { value: "60%", label: "Faster Turnaround" },
            { value: "₹8L", label: "Monthly Cost Saved" },
        ],
        tags: ["SQL", "Power BI", "Python", "ETL", "SQLAlchemy", "Excel", "MIS", "Google Sheets"],
    },
];

function Experience() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                {/* Header */}
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={12} style={{ paddingTop: "40px", paddingBottom: "20px", textAlign: "center" }}>
                        <h1 className="project-heading">
                            My <strong className="purple">Experience</strong>
                        </h1>
                        <p style={{ color: "white", fontSize: "1.1em" }}>
                            Where I've worked and what I've built
                        </p>
                    </Col>
                </Row>

                {/* Timeline */}
                <Row style={{ justifyContent: "center", paddingBottom: "60px" }}>
                    <Col md={10}>
                        {experienceData.map((exp, index) => (
                            <div key={index} className="experience-card-wrapper">
                                {/* Timeline dot + line */}
                                <div className="timeline-indicator">
                                    <div className="timeline-dot" />
                                    <div className="timeline-line" />
                                </div>

                                {/* Card */}
                                <div className="exp-card">
                                    {/* Card Header */}
                                    <div className="exp-card-header">
                                        <div className="exp-header-left">
                                            <span className="exp-badge">{exp.type}</span>
                                            <span className="exp-duration">⏱ {exp.duration}</span>
                                        </div>
                                        <div className="exp-company-block">
                                            <h2 className="exp-company">{exp.company}</h2>
                                            <h3 className="exp-role">
                                                <span className="purple">⚡ </span>{exp.role}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Metrics Row */}
                                    <div className="exp-metrics">
                                        {exp.metrics.map((m, i) => (
                                            <div key={i} className="metric-chip">
                                                <span className="metric-value purple">{m.value}</span>
                                                <span className="metric-label">{m.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Divider */}
                                    <div className="exp-divider" />

                                    {/* Bullet Points */}
                                    <ul className="exp-bullets">
                                        {exp.highlights.map((point, i) => (
                                            <li key={i} className="exp-bullet-item">
                                                <span className="bullet-icon purple">▹</span>
                                                <span className="bullet-text">{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="exp-tags">
                                        {exp.tags.map((tag, i) => (
                                            <span key={i} className="exp-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>

            {/* Scoped styles */}
            <style>{`
        /* ── Timeline wrapper ── */
        .experience-card-wrapper {
          display: flex;
          gap: 24px;
          margin-bottom: 50px;
          position: relative;
        }

        .timeline-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          flex-shrink: 0;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #c770f0;
          box-shadow: 0 0 12px #c770f0aa;
          flex-shrink: 0;
          z-index: 1;
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(to bottom, #c770f0, transparent);
          margin-top: 6px;
          min-height: 60px;
        }

        /* ── Card ── */
        .exp-card {
          flex: 1;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(199, 112, 240, 0.25);
          border-radius: 16px;
          padding: 32px;
          backdrop-filter: blur(10px);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .exp-card:hover {
          border-color: rgba(199, 112, 240, 0.6);
          box-shadow: 0 8px 40px rgba(199, 112, 240, 0.12);
        }

        /* ── Header ── */
        .exp-card-header {
          margin-bottom: 24px;
        }

        .exp-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .exp-badge {
          background: rgba(199, 112, 240, 0.15);
          border: 1px solid rgba(199, 112, 240, 0.4);
          color: #c770f0;
          font-size: 0.72em;
          font-weight: 600;
          padding: 3px 12px;
          border-radius: 20px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .exp-duration {
          color: #aaa;
          font-size: 0.85em;
        }

        .exp-company {
          font-size: 1.55em;
          font-weight: 700;
          color: white;
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .exp-role {
          font-size: 1.05em;
          color: #ccc;
          font-weight: 400;
          margin: 0;
        }

        /* ── Metrics ── */
        .exp-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 24px;
        }

        .metric-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(199, 112, 240, 0.08);
          border: 1px solid rgba(199, 112, 240, 0.2);
          border-radius: 12px;
          padding: 12px 20px;
          min-width: 90px;
          transition: background 0.2s;
        }

        .metric-chip:hover {
          background: rgba(199, 112, 240, 0.15);
        }

        .metric-value {
          font-size: 1.5em;
          font-weight: 800;
          line-height: 1;
        }

        .metric-label {
          font-size: 0.7em;
          color: #aaa;
          text-align: center;
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* ── Divider ── */
        .exp-divider {
          height: 1px;
          background: linear-gradient(to right, rgba(199,112,240,0.3), transparent);
          margin-bottom: 20px;
        }

        /* ── Bullets ── */
        .exp-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }

        .exp-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
        }

        .bullet-icon {
          font-size: 1em;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bullet-text {
          color: #ccc;
          font-size: 0.92em;
          line-height: 1.65;
        }

        /* ── Tags ── */
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }

        .exp-tag {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          color: #bbb;
          font-size: 0.75em;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.04em;
          transition: border-color 0.2s, color 0.2s;
        }

        .exp-tag:hover {
          border-color: rgba(199, 112, 240, 0.5);
          color: #c770f0;
        }

        /* ── Responsive ── */
        @media (max-width: 576px) {
          .exp-card {
            padding: 20px;
          }
          .exp-company {
            font-size: 1.2em;
          }
          .metric-chip {
            min-width: 70px;
            padding: 10px 14px;
          }
          .metric-value {
            font-size: 1.2em;
          }
          .timeline-indicator {
            display: none;
          }
        }
      `}</style>
        </Container>
    );
}

export default Experience;