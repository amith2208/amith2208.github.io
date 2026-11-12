export const profile = {
  name: 'Amith HB',
  title: 'Data Engineer',
  location: 'Bengaluru, Karnataka, India',
  email: 'hbamith2208@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amith-hb-977776195/',
  github: 'https://github.com/amith2208',
  resume: '/assets/Amith_HB.pdf',
};

export const experience = [
  {
    company: 'Albertsons Companies',
    role: 'Data Engineer',
    dates: 'December 2025 — Present',
    period: '2025 — NOW',
    project: 'Loyalty & Payments Data Engineering',
    summary:
      'Building reliable batch and streaming workflows for loyalty and payments data across Google Cloud.',
    highlights: [
      'Build ingestion and transformation workflows connecting SFTP, SQL databases, MongoDB, Kafka, and Google Cloud Storage.',
      'Orchestrate workflows with Cloud Composer and the internal AUDI orchestration framework, including dependencies, validation, monitoring, and error handling.',
      'Develop BigQuery SQL transformations and stored procedures, and optimize datasets with partitioning and clustering.',
    ],
    stack: ['Cloud Composer', 'BigQuery', 'GCS', 'Kafka', 'MongoDB'],
    current: true,
  },
  {
    company: 'Shell India Private Limited',
    role: 'Associate Data Engineer',
    dates: 'August 2022 — November 2025',
    period: '2022 — 2025',
    project: 'Global Credit System',
    summary:
      'Delivered Azure-based ELT pipelines and data management capabilities for a global credit platform.',
    highlights: [
      'Designed and deployed 10+ Azure Data Factory ELT pipelines integrating 15+ internal and external sources.',
      'Built PySpark and SQL transformations in Databricks, reducing processing time by up to 40%.',
      'Introduced centralized monitoring and alerting, cutting incident resolution time by 50% and defining 20+ alert categories with business stakeholders.',
      'Built centralized counterparty data management, reducing duplication by 60%, while maintaining a 99.5% pipeline execution success rate.',
    ],
    stack: ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'SQL', 'Azure Monitor'],
    current: false,
  },
];

export const skillGroups = [
  {
    number: '01',
    title: 'Programming',
    summary: 'Code for pipelines and transformations',
    skills: ['Python', 'SQL', 'Java'],
  },
  {
    number: '02',
    title: 'Cloud platforms',
    summary: 'Build and operate in the cloud',
    skills: ['Microsoft Azure', 'Google Cloud Platform'],
  },
  {
    number: '03',
    title: 'Data engineering',
    summary: 'Move and process data at scale',
    skills: ['Apache Spark', 'PySpark', 'Azure Data Factory', 'Databricks', 'Dataflow', 'Pub/Sub'],
  },
  {
    number: '04',
    title: 'Databases & streaming',
    summary: 'Warehouses, stores, and event streams',
    skills: ['BigQuery', 'Azure Blob Storage', 'Google Cloud Storage', 'MongoDB', 'Kafka'],
  },
  {
    number: '05',
    title: 'Orchestration & DevOps',
    summary: 'Schedule, observe, and ship workflows',
    skills: ['Cloud Composer', 'Apache Airflow', 'Azure DevOps', 'Azure Monitor', 'Git', 'GitHub'],
  },
  {
    number: '06',
    title: 'Analytics',
    summary: 'Turn data into useful perspectives',
    skills: ['Power BI', 'Tableau'],
  },
];

export const projects = [
  {
    number: '01',
    title: 'GCP IPL Analytics Pipeline',
    type: 'PERSONAL DATA ENGINEERING PROJECT',
    summary:
      'An end-to-end cricket analytics flow that lands raw match data in Cloud Storage, models it in BigQuery, and serves insights through a connected dashboard.',
    details: ['Raw and analytics layers', 'Fact and dimension modeling', 'Data quality checks', 'BigQuery clustering'],
    stack: ['Google Cloud Storage', 'BigQuery', 'SQL', 'Google Sheets'],
    href: 'https://github.com/amith2208/ipl-bigquery-analytics',
    hrefLabel: 'Source code',
    secondaryHref:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3aUmtRHnN1vQWOBX6_Gjvaimy_2yMnMYy6s9foo5iWazUqqRu2GqkB06dUmiOq6zCrZb87oHx7T6r/pubhtml',
    secondaryLabel: 'Live dashboard',
    category: 'GCP · ANALYTICS',
  },
  {
    number: '02',
    title: 'Global Credit System',
    type: 'SHELL INDIA · ENTERPRISE DATA ENGINEERING',
    summary:
      'Azure data engineering work supporting a global credit platform, with multi-source ELT, distributed transformations, centralized counterparty data, and operational monitoring.',
    details: ['10+ ELT pipelines', '15+ integrated sources', 'Up to 40% faster processing', '99.5% pipeline success'],
    stack: ['Azure Data Factory', 'Databricks', 'PySpark', 'SQL'],
    href: null,
    hrefLabel: '',
    secondaryHref: null,
    secondaryLabel: '',
    category: 'AZURE · PRIVATE PROJECT',
  },
  {
    number: '03',
    title: 'QuickScan',
    type: 'PYTHON · SECURITY TOOL',
    summary:
      'A Python website scanning utility that crawls pages, checks for common web vulnerability patterns, and generates scan reports.',
    details: ['Crawling and target discovery', 'SQL injection checks', 'Cross-site scripting checks', 'HTML and text reports'],
    stack: ['Python', 'Requests', 'Beautiful Soup'],
    href: 'https://github.com/amith2208/QuickScan',
    hrefLabel: 'Repository',
    secondaryHref: null,
    secondaryLabel: '',
    category: 'PYTHON · WEB SECURITY',
  },
  {
    number: '04',
    title: 'Marketing for Finance',
    type: 'FINANCE · MARKETING',
    summary:
      'A finance marketing project. The public Bank_Marketing repository currently has no published source files, so this card makes no claims about its implementation or results.',
    details: [],
    stack: [],
    href: null,
    hrefLabel: '',
    secondaryHref: null,
    secondaryLabel: '',
    category: 'PROJECT DETAILS NOT PUBLISHED',
  },
];

export const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    year: '2023',
    image: '/certifications/azure-fundamentals.png',
    alt: 'Microsoft Azure Fundamentals certificate issued to Amith HB',
    credential: 'AZ-900',
  },
  {
    title: 'Databricks Certified Data Engineer Associate',
    issuer: 'Databricks',
    year: '',
    image: '',
    alt: '',
    credential: 'CERTIFIED',
  },
  {
    title: 'Data Engineering Foundations',
    issuer: 'LinkedIn Learning',
    year: '2022',
    image: '/certifications/data-engineering-foundations.png',
    alt: 'LinkedIn Learning certificate of completion for Data Engineering Foundations',
    credential: 'COURSE',
  },
];

export const education = {
  degree: 'B.E. Computer Science and Engineering',
  institution: 'Ramaiah Institute of Technology',
  location: 'Bengaluru, India',
};
