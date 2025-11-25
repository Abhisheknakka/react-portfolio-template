import React from "react";
import "../assets/styles/Certifications.scss";

// Import your updated badge images
import azureAiCert from "../assets/images/azure-ai-engineer.png";  // <- Azure AI badge
import dbtFundamentalsCert from "../assets/images/dbt-fundamentals.png"; // <- dbt badge
import databricksFundamentalsCert from "../assets/images/lakehouse-fundamentals.png"; // <- dbt badge
import databricksdataengineerassociate from "../assets/images/associate-badge-de.png"; // <- dbt badge

// Placeholder images for new certifications (to be updated)
// TODO: Replace these with actual certification badge images
import databricksProfessionalPlaceholder from "../assets/images/professional-badge-de.png"; // <- Replace with databricks-professional-placeholder.png
import airflowFundamentalsPlaceholder from "../assets/images/airflow-fundamentals.png"; // <- Replace with airflow-fundamentals-placeholder.png
import airflowDagAuthoringPlaceholder from "../assets/images/airflow-dagauthorizing.png"; // <- Replace with airflow-dag-authoring-placeholder.png

function Certifications() {
    return (
        <div className="container" id="certifications">
            <div className="certifications-container">
                <h1>Certifications & Achievements</h1>
                <div className="skills-grid">
                    {/* 1. Databricks Data Engineer Professional */}
                    <div className="skill">
                        <div>
                            <img src={databricksProfessionalPlaceholder} alt="Databricks Data Engineer Professional" className="cert-icon" />
                        </div>
                        <h3>
                            Databricks Data Engineer Professional
                        </h3>
                        <p>Advanced certification demonstrating expertise in building and managing complex data engineering solutions on the Databricks platform.</p>
                    </div>

                    {/* 2. Databricks Data Engineer Associate */}
                    <div className="skill">
                        <a href="https://learn.microsoft.com/en-us/users/abhisheknakka-4994/credentials/97cc0b46ce4b7929?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noreferrer">
                            <img src={databricksdataengineerassociate} alt="Databricks Data Engineer Associate" className="cert-icon" />
                        </a>
                        <h3>
                            <a href="https://learn.microsoft.com/en-us/users/abhisheknakka-4994/credentials/97cc0b46ce4b7929?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noreferrer">
                                Databricks Data Engineer Associate
                            </a>
                        </h3>
                        <p>Validated proficiency in building data pipelines using Databricks, including data ingestion, transformation, and writing production-quality code in PySpark. Good understanding of Lakehouse architecture, Delta Lake, and managing workflows with Delta Live tables and good understanding on handling Streaming data.</p>
                    </div>

                    {/* 3. Apache Airflow® Fundamentals Certification */}
                    <div className="skill">
                        <div>
                            <img src={airflowFundamentalsPlaceholder} alt="Apache Airflow Fundamentals Certification" className="cert-icon" />
                        </div>
                        <h3>
                            Apache Airflow® Fundamentals Certification
                        </h3>
                        <p>The Astronomer Certification for Apache Airflow® Fundamentals exam assesses an understanding of the basics of the Airflow architecture and the ability to create basic data pipelines for scheduling and monitoring tasks.</p>
                   
                    </div>

                    {/* 4. Apache Airflow® DAG Authoring Certification */}
                    <div className="skill">
                        <div>
                            <img src={airflowDagAuthoringPlaceholder} alt="Apache Airflow DAG Authoring Certification" className="cert-icon" />
                        </div>
                        <h3>
                            Apache Airflow® DAG Authoring Certification
                        </h3>
                        <p>The Astronomer Certification for DAG Authoring exam assesses your knowledge of designing and creating reliable data pipelines following best practices.</p>
                    </div>

                    {/* Rest of certifications */}
                    <div className="skill">
                        <a href="https://learn.microsoft.com/en-us/users/abhisheknakka-4994/credentials/97cc0b46ce4b7929?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noreferrer">
                            <img src={azureAiCert} alt="Azure AI Engineer Certification" className="cert-icon" />
                        </a>
                        <h3>
                            <a href="https://learn.microsoft.com/en-us/users/abhisheknakka-4994/credentials/97cc0b46ce4b7929?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noreferrer">
                                Microsoft Certified: Azure AI Engineer Associate
                            </a>
                        </h3>
                        <p>Demonstrated expertise in using Azure AI services like Cognitive Services, Azure Machine Learning, and conversational AI to build AI solutions.</p>
                    </div>

                    <div className="skill">
                        <div>
                            <img src={databricksFundamentalsCert} alt="Dtabricks Lakehouse Certification" className="cert-icon" />
                        </div>
                        <h3>
                            Databricks Lakehouse Certification
                        </h3>
                        <p>Mastered core concepts of the Lakehouse architecture, including Delta Lake, Unity Catalog, and Databricks' approach to unifying data engineering, analytics, and machine learning on a single platform.</p>
                    </div>

                    <div className="skill">
                        <a href="https://credentials.getdbt.com/abc53098-6107-4f98-a506-24edc4ce90c6#acc.XBM1LgYV" target="_blank" rel="noreferrer">
                            <img src={dbtFundamentalsCert} alt="dbt Fundamentals Certification" className="cert-icon" />
                        </a>
                        <h3>
                            <a href="https://credentials.getdbt.com/abc53098-6107-4f98-a506-24edc4ce90c6#acc.XBM1LgYV" target="_blank" rel="noreferrer">
                                dbt Fundamentals Certification
                            </a>
                        </h3>
                        <p>Mastered dbt core concepts for transforming data in the warehouse, including modeling, testing, and documentation best practices.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Certifications;
