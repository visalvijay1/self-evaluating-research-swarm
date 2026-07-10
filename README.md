# ResearcHSwarm

# Self-Evaluating Multi-Agent Research Swarm

A modern AI research platform interface designed to generate self-evaluated research reports and help users discover highly relevant academic papers.

The application presents a multi-agent research workflow in which AI agents generate, validate, evaluate, and iteratively refine research reports. It also includes an academic paper discovery interface that ranks papers based on relevance, citation impact, publication recency, and open-access availability.

## Features

### Self-Evaluating Research Dashboard

- Accepts research topics and questions
- Displays structured AI-generated research reports
- Shows key findings and technical analysis
- Displays limitations and future research directions
- Shows report quality scores
- Displays execution time and refinement iterations
- Visualizes the complete self-evaluation history

### Multi-Agent Research Pipeline

The interface represents four specialized stages:

1. **Research Agent**  
   Generates a structured technical research report.

2. **Schema Validator**  
   Validates the report structure and required output fields.

3. **Auditor Agent**  
   Evaluates report quality and generates corrective feedback.

4. **Decision Engine**  
   Approves the report or initiates another refinement iteration.

```text
User Research Query
        │
        ▼
Research Agent
        │
        ▼
Schema Validator
        │
        ▼
Auditor Agent
        │
        ▼
Decision Engine
        │
        ├── Approved ──► Final Research Report
        │
        └── Revision Required
                    │
                    ▼
              Refine Report
                    │
                    └──► Evaluate Again
```

### Academic Paper Discovery

- Searches for papers using a research topic
- Displays ranked academic paper recommendations
- Highlights the highest-ranked result
- Displays paper authors
- Displays publication year
- Displays citation count
- Displays publication venue
- Shows paper abstracts
- Provides paper and open-access PDF options when available

### Paper Recommendation Criteria

Academic papers are ranked using:

- Topic relevance
- Citation impact
- Publication recency
- Open-access availability

Each paper receives a recommendation score and a short explanation of why it was recommended.

## Technology Stack

- React
- Vite
- JavaScript
- JSX
- Tailwind CSS
- Framer Motion
- React Icons

## Project Structure

```text
frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── AgentCard.jsx
│   │   ├── AgentPipeline.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBox.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── PaperDiscovery.jsx
│   │
│   ├── services/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd <repository-name>
```

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite in the terminal.

## Application Modules

### Generate Report

The research dashboard allows users to submit a research query and view:

- Final report title
- Key research findings
- Technical analysis
- Limitations
- Future work
- Quality score
- Number of refinement iterations
- Self-evaluation history

### Discover Papers

The academic discovery interface allows users to:

- Enter a research topic
- Select a ranking preference
- View ranked paper recommendations
- Read available abstracts
- Access paper publication pages
- Open available research PDFs

## Current Limitations

- Search results depend on the availability of external academic data.
- Some papers may not contain abstracts or open-access PDFs.
- Recommendation scores are ranking indicators and do not guarantee academic quality.
- Generated research content should be independently verified before formal academic use.

## Future Enhancements

- Semantic paper ranking using embeddings
- Paper comparison
- Saved research collections
- Search history
- Citation generation
- BibTeX export
- PDF and DOCX report export
- User authentication

## Disclaimer

This application is intended as an AI-assisted research interface. Generated reports and academic paper recommendations should be independently reviewed and verified using original research sources.