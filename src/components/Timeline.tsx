import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import darwinboxLogo from "../assets/images/darwinbox_logo.png";
import cognizantLogo from "../assets/images/cognizant_logo.png";
import shyftlabsLogo from "../assets/images/shyftlabs_logo.png";
// You'll need to import a logo for Phoenix Analytics.
// If you don't have one, you can use a placeholder or find one.
import phoenixAnalyticsLogo from "../assets/images/phoenix_analytics_logo.jpeg";
import canadaFlag from "../assets/images/Flag_of_Canada_(Pantone).svg.png";
import indiaFlag from "../assets/images/Flag_of_India.svg.png";


import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* Shyftlabs - Data Engineer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)', position: 'relative' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="country-flag">
              <img src={canadaFlag} alt="Canada Flag" />
            </div>
            <h3 className="vertical-timeline-element-title">Data Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://shyftlabs.io/" target="_blank" rel="noreferrer">
                <img
                  src={shyftlabsLogo}
                  alt="Shyftlabs Logo"
                  style={{ width: "80px", verticalAlign: "middle", marginRight: "10px" }}
                />
              </a>
              <a
                href="https://shyftlabs.io/"
                target="_blank"
                rel="noreferrer"
                className="visible-link"
              >
                Shyftlabs
              </a>
            </h4>
            <p>
              Designing and developing ETL pipelines using modern data engineering technologies including PostgreSQL, Databricks, BigQuery, and Snowflake.
              Orchestrating workflows with Apache Airflow and deploying scripts on EC2 machines.
              Following best practices for version control with GitHub and project management with Jira.
            </p>
          </VerticalTimelineElement>

          {/* Darwinbox - Technical Analyst */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)', position: 'relative' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Mar 2022 – Dec 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="country-flag">
              <img src={indiaFlag} alt="India Flag" />
            </div>
            <h3 className="vertical-timeline-element-title">Data Engineer - Integrations</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://www.darwinbox.com/" target="_blank" rel="noreferrer">
                <img
                  src={darwinboxLogo}
                  alt="Darwinbox Logo"
                  style={{ width: "80px", verticalAlign: "middle", marginRight: "10px" }}
                />
              </a>
              <a
                href="https://www.darwinbox.com/"
                target="_blank"
                rel="noreferrer"
                className="visible-link"
              >
                Darwinbox, Hyderabad, India
              </a>
            </h4>
            <p>
              Designed and implemented complex data models and ETL pipelines using Azure Data Factory and Databricks.
              Improved data accuracy by 30% through profiling and quality assessments.
              Managed metadata using Azure Purview for regulatory compliance.
            </p>
          </VerticalTimelineElement>

          {/* Darwinbox - Business Analyst Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ position: 'relative' }}
            date="Jan 2022 – Mar 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="country-flag">
              <img src={indiaFlag} alt="India Flag" />
            </div>
            <h3 className="vertical-timeline-element-title">Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://www.darwinbox.com/" target="_blank" rel="noreferrer">
                <img
                  src={darwinboxLogo}
                  alt="Darwinbox Logo"
                  style={{ width: "80px", verticalAlign: "middle", marginRight: "10px" }}
                />
              </a>
              <a
                href="https://www.darwinbox.com/"
                target="_blank"
                rel="noreferrer"
                className="visible-link"
              >
                Darwinbox, Hyderabad, India
              </a>

            </h4>
            <p>
              Gathered and analyzed data to improve client success rates.
              Automated reports and dashboards using Python and Tableau.
              Enhanced API integration for seamless data flow between platforms like SAP and Oracle.
            </p>
          </VerticalTimelineElement>

          {/* Cognizant - Jr. Data Engineer*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ position: 'relative' }}
            date="Jun 2021 – Dec 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="country-flag">
              <img src={indiaFlag} alt="India Flag" />
            </div>
            <h3 className="vertical-timeline-element-title">Jr. Data Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://www.cognizant.com/" target="_blank" rel="noreferrer">
                <img
                  src={cognizantLogo}
                  alt="Cognizant Logo"
                  style={{ width: "80px", verticalAlign: "middle", marginRight: "10px" }}
                />
              </a>
              <a
                href="https://www.darwinbox.com/"
                target="_blank"
                rel="noreferrer"
                className="visible-link"
              >
                Cognizant, Hyderabad, India
              </a>
            </h4>
            <p>
              Developed scalable data pipelines using PySpark and SQL.
              Automated ETL workflows with Apache Airflow.
              Integrated external data sources using REST APIs.
            </p>
          </VerticalTimelineElement>

          {/* Phoenix Analytics - Business Intelligence Analyst */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ position: 'relative' }}
            date="Jan 2020 – May 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="country-flag">
              <img src={indiaFlag} alt="India Flag" />
            </div>
            <h3 className="vertical-timeline-element-title"> Analyst </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://www.facebook.com/p/Phoenix-Analytics-100064112640425/?locale=ar_AR" target="_blank" rel="noreferrer">
                <img
                  src={phoenixAnalyticsLogo}
                  alt="Phoenix Analytics Logo"
                  style={{ width: "80px", verticalAlign: "middle", marginRight: "10px" }}
                />
              </a>
              <a
                href="https://www.facebook.com/p/Phoenix-Analytics-100064112640425/?locale=ar_AR"
                target="_blank"
                rel="noreferrer"
                className="visible-link"
              >
                Phoenix Analytics Startup
              </a>
            </h4>
            <p>
              Developed BI dashboards to visualize key performance indicators, enabling data-driven decision-making for small-scale food industries.
            Conducted data analysis to identify revenue trends and provided actionable insights, collaborating with stakeholders to refine reporting requirements.

            </p>
          </VerticalTimelineElement>

          

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;