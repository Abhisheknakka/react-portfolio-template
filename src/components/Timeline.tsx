import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import darwinboxLogo from "../assets/images/darwinbox_logo.png";
import cognizantLogo from "../assets/images/cognizant_logo.png";

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

          {/* Darwinbox - Technical Analyst */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Mar 2022 – Dec 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Analyst</h3>
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
            date="Jan 2022 – Mar 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Analyst</h3>
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

          {/* Cognizant - Programmer Analyst */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2021 – Dec 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Programmer Analyst</h3>
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

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
