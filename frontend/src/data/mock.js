// Mock data for Sandeep S. Bajwa's Portfolio

export const personalInfo = {
  name: "Sandeep S. Bajwa",
  title: "Seasoned Data Engineer & Database Architecture Expert",
  location: "Cranberry Township, PA",
  email: "Bajwa_Sandeep@yahoo.com",
  phone: "(412) 260 1246",
  linkedIn: "https://www.linkedin.com/in/sandeep-bajwa-1809a31/",
  github: "https://github.com/sandeep-bajwa",
  summary: "Twenty-five years of experience working for international companies in a variety of industries, including finance, education, healthcare, and manufacturing. Proven expertise in database engineering, cloud migrations, and enterprise data solutions."
};

export const skills = [
  {
    category: "Database Management",
    items: ["Oracle 7.2-23c", "Exadata", "RAC", "Data Guard", "Data Warehouse", "Snowflake", "SQL Server", "MySQL"]
  },
  {
    category: "Cloud Platforms", 
    items: ["Oracle Cloud Infrastructure", "AWS", "Microsoft Azure", "Google Cloud", "Database Cloud Service"]
  },
  {
    category: "AI, Big Data & Analytics",
    items: ["AI Generalist", "ML/DL", "Hadoop", "Spark", "Impala", "Kudu", "Tableau", "Cognos", "Splunk"]
  },
  {
    category: "Data Integration",
    items: ["Qlik Replicate", "Golden Gate", "Jitterbit", "Attunity", "ETL/ELT", "Real-time Replication"]
  },
  {
    category: "Programming & Scripting",
    items: ["PL/SQL", "Python", "Java", "C/C++", "Shell Scripting", "SQL", "Unix/Linux Administration"]
  },
  {
    category: "Tools & Platforms",
    items: ["OEM", "RMAN", "Toad", "SQL Developer", "Git", "JIRA", "Confluence", "Kubernetes"]
  }
];

export const experience = [
  {
    title: "Oracle Database Engineer",
    company: "Artech LLC (placed at PNC Bank)",
    period: "May 2025 – Present",
    location: "Pittsburgh, PA",
    description: "Database replication administration on Golden Gate. Database engineering on Oracle development and support. Oracle enterprise manager administration supporting over 500 databases.",
    achievements: [
      "Managing Golden Gate replication across enterprise systems",
      "Supporting 500+ Oracle databases through OEM",
      "Engineered systems administration on Exadata platform"
    ]
  },
  {
    title: "Oracle Database Engineer (Vice President)",
    company: "BNY Mellon", 
    period: "September 2023 – May 2025",
    location: "Pittsburgh, PA",
    description: "Led data warehouse conversion and migration to Snowflake from Oracle. Database engineering on Oracle (on-premise and OCI). Big Data engineering on multiple platforms.",
    achievements: [
      "Successfully migrated enterprise data warehouse to Snowflake",
      "Implemented Hadoop and Big Data solutions (Kafka, Spark, HDFS)",
      "Managed Oracle databases on both on-premise and OCI environments"
    ]
  },
  {
    title: "Sr. Oracle Database Engineer/Administrator",
    company: "Independent Contractor",
    period: "October 2022 – September 2023", 
    location: "Remote",
    description: "Data warehouse conversion and migration to Snowflake from Oracle. Container-based applications using Storm and Kubernetes. 24x7 production support.",
    achievements: [
      "Migrated Oracle data warehouse to Snowflake 8.23.5",
      "Implemented container-based data solutions with Kubernetes",
      "Delivered 24x7 production support for mission-critical systems"
    ]
  },
  {
    title: "Sr. Oracle Database Administrator",
    company: "University of Pittsburgh",
    period: "July 2005 – October 2022",
    location: "Pittsburgh, PA", 
    description: "Comprehensive database fleet management including datacenter migrations, cloud migrations, and enterprise system support for university operations.",
    achievements: [
      "Implemented real-time data replication with Qlik Replicate",
      "Migrated 8 OLTP databases to cloud (OCI, Azure, AWS)",
      "Built Decision Support Systems on Oracle Exadata",
      "Implemented Big Data Apache Hadoop with 1TB+ daily ingestion"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Enterprise Oracle to Snowflake Migration",
    description: "Led complete migration of multi-terabyte Oracle data warehouse to Snowflake cloud platform, ensuring zero downtime and maintaining data integrity throughout the process.",
    technologies: ["Oracle 19c", "Snowflake", "Python", "ETL", "Data Modeling"],
    highlights: [
      "Migrated 15TB+ enterprise data warehouse",
      "Achieved 40% performance improvement", 
      "Zero downtime migration strategy",
      "Cost reduction of 35% in cloud infrastructure"
    ],
    category: "Cloud Migration"
  },
  {
    id: 2, 
    title: "Real-time Data Replication System",
    description: "Implemented enterprise-grade real-time data replication using Qlik Replicate to synchronize PeopleSoft Student Systems with Exadata Data Warehouse.",
    technologies: ["Qlik Replicate", "Oracle Exadata", "PeopleSoft", "Golden Gate", "CDC"],
    highlights: [
      "Real-time data sync with <5 second latency",
      "Processing 500K+ transactions daily",
      "Implemented advanced security for sensitive data",
      "24x7 monitoring and alerting system"
    ],
    category: "Data Integration"
  },
  {
    id: 3,
    title: "Exadata Performance Optimization",
    description: "Comprehensive performance tuning of Oracle Exadata systems supporting Decision Support Systems, achieving significant improvements in query response times.",
    technologies: ["Oracle Exadata", "RAC", "ASM", "Performance Tuning", "OEM"],
    highlights: [
      "Improved query performance by 60%",
      "Optimized 5-node RAC configuration", 
      "Reduced storage costs by 25%",
      "Enhanced system availability to 99.9%"
    ],
    category: "Performance Optimization"
  },
  {
    id: 4,
    title: "Big Data Lake Implementation", 
    description: "Designed and implemented Apache Hadoop-based data lake architecture with Cloudera support, enabling advanced analytics and machine learning capabilities.",
    technologies: ["Hadoop", "Kafka", "Spark", "HDFS", "Impala", "Cloudera", "Python"],
    highlights: [
      "Built scalable data lake for 1TB+ daily ingestion",
      "Implemented real-time streaming with Kafka",
      "Enabled advanced analytics capabilities",
      "Integrated with existing Oracle systems"
    ],
    category: "Big Data"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Michael Gural",
    position: "Sr. IT Professional",
    company: "Former Manager",
    content: "Sandeep is extremely knowledgeable and detail oriented DBA, and a pleasure to work with.",
    rating: 5,
    date: "March 9, 2011",
    relationship: "Managed Sandeep directly"
  },
  {
    id: 2,
    name: "William Wolf",
    position: "Director, Database Administration",
    company: "Abarca Health",
    content: "Sandeep is a very able ORACLE DBA. He thinks faster than anyone I have ever known. He knows more about ORACLE databases than anyone I have known.",
    rating: 5,
    relationship: "Worked with Sandeep on the same team"
  }
];

export const certifications = [
  {
    name: "Oracle Certified Professional in Database Administration",
    logo: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/90jxigvf_OCP.jpg",
    shortName: "OCP DBA"
  },
  {
    name: "1Z0-1127-25 - Oracle Cloud Infrastructure 2025 Generative AI Professional",
    logo: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/kvzvj2h5_Oracle_university.png",
    shortName: "OCI AI Generative AI Professional"
  },
  {
    name: "1Z0-1122-25 - Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    logo: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/md703z4e_Oracle_university.png",
    shortName: "OCI AI Foundations"
  },
  {
    name: "Python PCEP – Certified Entry-Level Python Programmer", 
    logo: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/zpciywym_pcep.png",
    shortName: "PCEP"
  }
];

export const education = {
  degree: "Bachelor of Science in Computer Information Science",
  school: "University of Pittsburgh",
  year: "1996",
  focus: "Data Structures and Networks"
};

export const blogPosts = [
  {
    id: 1,
    title: "Benefits of Using Common Table Expressions (CTEs) in SQL Queries",
    summary: "This document highlights the significant advantages of using Common Table Expressions (CTEs) in SQL. CTEs, which define temporary named result sets, are presented as a powerful tool to make complex SQL queries more understandable, manageable, and efficient.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/unyxk3ci_CTE_Benefits.docx",
    topics: ["SQL Optimization", "Query Design", "Best Practices"],
    publishedDate: "2025",
    type: "Technical Guide"
  },
  {
    id: 2,
    title: "Oracle Database Locks and Deadlocks (with Scripts)",
    summary: "This document serves as a practical guide for Oracle Database Administrators (DBAs) to troubleshoot and manage lock contention and deadlocks. It offers a series of SQL queries that leverage Oracle's dynamic performance views to provide insights into the current state of locks within the database.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/6zwloh50_Database_locks_and_deadlocks_with_scripts.docx",
    topics: ["Database Administration", "Performance Tuning", "Troubleshooting"],
    publishedDate: "2025",
    type: "Diagnostic Scripts"
  },
  {
    id: 3,
    title: "Hadoop Big Data Lake Architecture with Real-Time Streaming",
    summary: "This document explores how to build a robust and scalable Hadoop Big Data Lake Architecture that incorporates real-time streaming capabilities. It explains that data lakes, built on Hadoop's distributed storage and processing, can store diverse data types without predefined schemas.",
    category: "Big Data Architecture",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/9r82qqj7_Hadoop%20Big%20Data%20Lake%20Architecture.docx",
    topics: ["Big Data", "Hadoop", "Streaming", "Architecture"],
    publishedDate: "2025",
    type: "Architecture Guide"
  },
  {
    id: 4,
    title: "Top 20 New Features in Oracle Database 23ai",
    summary: "Oracle Database 23ai introduces significant advancements centered around AI, automation, developer ease-of-use, and enhanced security. Key innovations include native AI Vector Search for semantic capabilities, in-database machine learning enhancements, and SQL Firewall for threat protection.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/4kdrw8sr_Oracle%2023ai%20Top%2020%20Features.docx",
    topics: ["Oracle 23ai", "AI Features", "Database Innovation"],
    publishedDate: "2025",
    type: "Feature Overview"
  },
  {
    id: 5,
    title: "Oracle Data Guard: Modes, Setup, Lag Checks & Troubleshooting",
    summary: "This document serves as a comprehensive guide to Oracle Data Guard, focusing on ensuring high availability and disaster recovery. It covers protection modes, setup procedures, monitoring scripts, and troubleshooting common issues.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/n2tt71k5_Oracle%20Data%20Guard_%20Modes%2C%20Setup%2C%20Lag%20Checks%20%26%20Troubleshooting.docx",
    topics: ["Data Guard", "High Availability", "Disaster Recovery"],
    publishedDate: "2025",
    type: "Implementation Guide"
  },
  {
    id: 6,
    title: "Basics of Oracle Physical Backups in an Exadata Environment Using ZDLRA",
    summary: "This document explains how to perform effective physical backups for Oracle Databases running on Exadata using the Oracle Zero Data Loss Recovery Appliance (ZDLRA). It details ZDLRA's capabilities like continuous protection, scalability, and RMAN integration.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/g65lofm3_Oracle%20Exadata%20Zdlra%20Backups.docx",
    topics: ["Exadata", "ZDLRA", "RMAN", "Backup Strategy"],
    publishedDate: "2025",
    type: "Technical Guide"
  },
  {
    id: 7,
    title: "Oracle Data Pump (expdp/impdp) Logical Backups: Use Cases, Examples, and 23ai New Features",
    summary: "The document introduces Oracle Data Pump (expdp/impdp) as a powerful utility for logical backups and data movement. It highlights common use cases, provides practical command examples, and focuses on significant new features in Oracle 23ai.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/fxcmkqcg_Oracle%20Expdp%20Impdp%2023ai.docx",
    topics: ["Data Pump", "Oracle 23ai", "Logical Backup", "Migration"],
    publishedDate: "2025",
    type: "User Guide"
  },
  {
    id: 8,
    title: "Oracle GoldenGate Replication Setup: One-Way and Multi-Master with Examples",
    summary: "This document provides a comprehensive guide to setting up Oracle GoldenGate for both one-way and multi-master (bi-directional) replication. It offers detailed, step-by-step instructions and covers testing, validation, and troubleshooting.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/9saeytlo_Oracle%20Goldengate%20Replication.docx",
    topics: ["GoldenGate", "Replication", "Multi-Master", "Real-time"],
    publishedDate: "2025",
    type: "Setup Guide"
  },
  {
    id: 9,
    title: "Steps to Tune an Oracle Database Instance",
    summary: "This document provides a structured approach to tuning an Oracle database instance for optimal performance and resource utilization. It emphasizes establishing performance baselines and systematically addressing key tuning areas.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/z78l391b_Oracle%20Instance%20Tuning.docx",
    topics: ["Performance Tuning", "SGA/PGA", "AWR", "ADDM"],
    publishedDate: "2025",
    type: "Tuning Guide"
  },
  {
    id: 10,
    title: "Oracle Multitenant Architecture: Setup, Examples, and Converting a Non-CDB to PDB",
    summary: "This document provides a comprehensive guide to Oracle's Multitenant Architecture, explaining Container Databases (CDBs) and Pluggable Databases (PDBs). It includes a detailed step-by-step process for converting legacy Non-Container Databases into PDBs.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/iufs18vs_Oracle%20Multitenant%20Architecture%20%26%20Non-cdb%20%E2%86%92%20Pdb%20Conversion.docx",
    topics: ["Multitenant", "CDB", "PDB", "Migration"],
    publishedDate: "2025",
    type: "Architecture Guide"
  },
  {
    id: 11,
    title: "Oracle RMAN Backups: Use Cases, Examples, and New Features in 23ai",
    summary: "This document provides a comprehensive overview of Oracle's Recovery Manager (RMAN), the standard tool for physical database backups and recovery. It highlights significant new features introduced in Oracle 23ai, including automatic Level-1 merge, parallelized restores, and RMAN REST API support.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/nezwhbiv_Oracle%20Rman%20Backups%2023ai.docx",
    topics: ["RMAN", "Oracle 23ai", "Backup", "Recovery"],
    publishedDate: "2025",
    type: "Technical Guide"
  },
  {
    id: 12,
    title: "Splunk Log Mining: A Practical Guide",
    summary: "This document serves as a practical guide to log mining using Splunk. It covers data ingestion, Search Processing Language (SPL), log mining techniques, visualization, and real-time monitoring with detailed examples for business analysis and system troubleshooting.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/v1sjbhqw_Splunk%20Log%20Mining_basics_with_examples.docx",
    topics: ["Splunk", "Log Mining", "SPL", "Analytics"],
    publishedDate: "2025",
    type: "User Guide"
  },
  {
    id: 13,
    title: "Steps to Tune a Query in Oracle Database",
    summary: "This document outlines a structured, 14-step methodology for systematically tuning poorly performing SQL queries in Oracle Database. It emphasizes analyzing execution plans, optimizing SQL predicates, improving indexing strategies, and using Oracle's diagnostic tools.",
    category: "Oracle Documents, Scripts and Tips",
    downloadUrl: "https://customer-assets.emergentagent.com/job_dbexpert/artifacts/l16tpzpj_Steps_to_tune_a_SQL.docx",
    topics: ["SQL Tuning", "Execution Plans", "Performance", "Optimization"],
    publishedDate: "2025",
    type: "Tuning Guide"
  }
];

export const careerHighlights = [
  {
    year: "2025",
    title: "Oracle Database Engineer at PNC Bank",
    description: "Managing 500+ Oracle databases through OEM, implementing Golden Gate replication across enterprise systems",
    type: "role",
    icon: "briefcase"
  },
  {
    year: "2024",
    title: "Enterprise Data Warehouse Migration to Snowflake",
    description: "Led complete migration of multi-terabyte Oracle data warehouse to Snowflake at BNY Mellon, achieving zero downtime",
    type: "achievement",
    icon: "cloud"
  },
  {
    year: "2023",
    title: "Vice President Role at BNY Mellon",
    description: "Promoted to VP level, leading data engineering initiatives and cloud migrations",
    type: "role",
    icon: "award"
  },
  {
    year: "2022",
    title: "Container-Based Data Solutions with Kubernetes",
    description: "Implemented modern container-based applications using Storm and Kubernetes for enterprise clients",
    type: "achievement",
    icon: "server"
  },
  {
    year: "2020",
    title: "Big Data Lake Implementation",
    description: "Built Apache Hadoop-based data lake at University of Pittsburgh with 1TB+ daily ingestion capacity",
    type: "achievement",
    icon: "database"
  },
  {
    year: "2018",
    title: "Real-Time Data Replication System",
    description: "Implemented Qlik Replicate for real-time data synchronization replacing legacy Golden Gate systems",
    type: "achievement",
    icon: "refresh"
  },
  {
    year: "2015",
    title: "Oracle Exadata Implementation",
    description: "Designed and implemented Decision Support Systems on Oracle Exadata ¼ rack, upgraded to 19c",
    type: "achievement",
    icon: "zap"
  },
  {
    year: "2010",
    title: "Cloud Migration Pioneer",
    description: "Successfully migrated 8 OLTP databases to cloud platforms (OCI, Azure, AWS) at University of Pittsburgh",
    type: "achievement",
    icon: "cloud-upload"
  },
  {
    year: "2005",
    title: "Senior Oracle DBA at University of Pittsburgh",
    description: "17-year tenure managing enterprise database systems, datacenter migrations, and implementing cutting-edge technologies",
    type: "role",
    icon: "briefcase"
  },
  {
    year: "2000",
    title: "Senior Oracle DBA at PNC Financial Services",
    description: "Implemented 24x7 shared databases on RAC, n-tier, and clustered disk environments",
    type: "role",
    icon: "briefcase"
  },
  {
    year: "1996",
    title: "Computer Science Degree",
    description: "Graduated with BS in Computer Information Science from University of Pittsburgh, specializing in data structures and networks",
    type: "education",
    icon: "graduation-cap"
  }
];