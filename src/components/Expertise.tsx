import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCloud, faCogs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Data Modeling",
    "ETL/ELT",
    "Data Quality",
    "Data Profiling",
    "Metadata Management",
    "Data Lineage",
    "Python",
    "SQL",
    "R",
];

const labelsSecond = [
    "Azure Data Lake",
    "Azure Synapse",
    "Databricks",
    "Azure Data Factory",
    "AWS S3",
    "AWS EC2",
    "Apache Spark",
    "Delta Lake",
    "PostgreSQL",
    "SQL Server",
    "MySQL",
];

const labelsThird = [
    "Apache Airflow",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "DBT",
    "Power BI",
    "Tableau",
    "Dataiku",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Engineering</h3>
                    <p>I specialize in building robust data pipelines, ensuring data quality, and managing large-scale data systems. I am proficient in data modeling, ETL/ELT processes, and leveraging cloud platforms for scalable data storage and processing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud Platforms & Data Storage</h3>
                    <p>Expert in utilizing cloud services for data storage, processing, and orchestration. I have hands-on experience with Azure and AWS services, enabling seamless data workflows and cloud-based solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x"/>
                    <h3>Orchestration & DevOps</h3>
                    <p>I have experience in setting up and managing automation for data pipelines, including orchestration with Apache Airflow and CI/CD with Jenkins. I am proficient in containerization and cloud-native DevOps practices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
