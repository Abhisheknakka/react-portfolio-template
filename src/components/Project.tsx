import React from "react";
import project0 from '../assets/images/project-0.jpg';
import project1 from '../assets/images/project-1.png';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.jpeg';
import project4 from '../assets/images/project-4.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                        <a href="" target="_blank" rel="noreferrer">
                            <img src={project0} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                        
                            <h2>Child Welfare Disparities – Racial Disproportionality Analysis for CAST</h2>
                            
                        <p>Partnered with Children's  Aid Socity of Toronto (CAST) and Trent University to identify racial disproportionality in child protection investigations across Toronto. Integrated over 150K CAST records with demographic and crime datasets, and built interactive maps and plots to uncover systemic biases. Tools used: Pandas, Folium, GeoJSON.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abhisheknakka/AI-Restaurent-Chat-bot" target="_blank" rel="noreferrer"><img src={project4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abhisheknakka/AI-Restaurent-Chat-bot" target="_blank" rel="noreferrer"><h2>Food AI – AI Driven Restaurant Menu Chatbot</h2></a>
                <p>Built an RAG chatbot for a restaurant using GPT-4 and Elasticsearch, providing dish details while engineering a data pipeline to create a gold-standard dataset for model fine-tuning.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abhisheknakka/azure-etl-pipeline" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abhisheknakka/azure-etl-pipeline" target="_blank" rel="noreferrer"><h2>Health Analytics – Optimized Health Data Pipeline</h2></a>
                <p>Developed a health analytics platform with Azure Databricks & Data Lake, improving data processing by 30% while ensuring secure storage and compliance with Azure Synapse.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abhisheknakka/rag-medical-bot?tab=readme-ov-file" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abhisheknakka/rag-medical-bot?tab=readme-ov-file" target="_blank" rel="noreferrer"><h2>RAG Medical Bot</h2></a>
                <p>Leveraged Azure Form Recognizer, MongoDB, and Groq LLM to create an AI-powered medical assistant for document analysis and medical interpretation.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abhisheknakka/dbt-bigquery-connection" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abhisheknakka/dbt-bigquery-connection" target="_blank" rel="noreferrer"><h2>BigQuery Data Pipeline</h2></a>
                <p>Designed and implemented a scalable ETL pipeline using Google BigQuery, Cloud Functions, and Dataflow for real-time analytics and reporting.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
