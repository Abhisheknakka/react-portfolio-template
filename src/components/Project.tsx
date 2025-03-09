import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Abhisheknakka/AI-Restaurent-Chat-bot" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abhisheknakka/AI-Restaurent-Chat-bot" target="_blank" rel="noreferrer"><h2>Food AI – AI Driven Restaurant Menu Chatbot</h2></a>
                <p>Built an RAG chatbot for a restaurant using GPT-4 and Elasticsearch, providing dish details while engineering a data pipeline to create a gold-standard dataset for model fine-tuning.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abhisheknakka/azure-etl-pipeline" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abhisheknakka/azure-etl-pipeline" target="_blank" rel="noreferrer"><h2>Health Analytics – Optimized Health Data Pipeline</h2></a>
                <p>Developed a health analytics platform with Azure Databricks & Data Lake, improving data processing by 30% while ensuring secure storage and compliance with Azure Synapse.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abhisheknakka/rag-medical-bot?tab=readme-ov-file" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abhisheknakka/rag-medical-bot?tab=readme-ov-file" target="_blank" rel="noreferrer"><h2>RAG Medical Bot</h2></a>
                <p>Leveraged Azure Form Recognizer, MongoDB, and Groq LLM to create an AI-powered medical assistant for document analysis and medical interpretation.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Abhisheknakka/dbt-bigquery-connection" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Abhisheknakka/dbt-bigquery-connection" target="_blank" rel="noreferrer"><h2>BigQuery Data Pipeline</h2></a>
                <p>Designed and implemented a scalable ETL pipeline using Google BigQuery, Cloud Functions, and Dataflow for real-time analytics and reporting.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
