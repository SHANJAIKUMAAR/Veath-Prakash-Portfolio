import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Veath Prakash B </span>
            from <span className="purple"> Chenna, India.</span>
            <br />
            I am an aspiring Data Analyst & Data Scientist.
            <br />
            I recently completed my B.E., & a Course in Data Analytics and
            Scientist and have gained hands-on experience in Data Analysis, SQL,
            Python, Power BI, and Tableau through various projects and
            internships.
            <br />
            <br />I am skilled in:
            <ul>
              <li className="about-activity">
                <ImPointRight /> 📊 Data Visualization – Creating dashboards in
                Power BI & Tableau
              </li>
              <li className="about-activity">
                <ImPointRight /> 📈 Data Analysis – Using SQL & Python (Pandas,
                NumPy, Matplotlib)
              </li>
              <li className="about-activity">
                <ImPointRight /> 🤖 Machine Learning Basics – Understanding
                predictive modeling & forecasting
              </li>
            </ul>
            <br />
            Apart from working with data, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new data science trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving real-world business problems using data
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning advanced analytics techniques
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about transforming data into meaningful insights!"{" "}
          </p>
          <footer className="blockquote-footer">Veath Prakash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
