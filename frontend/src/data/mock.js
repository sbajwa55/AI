// Mock data for Sandeep S. Bajwa's Portfolio

export const personalInfo = {
  name: "Sandeep S. Bajwa",
  title: "Seasoned Data Engineer & Database Architecture Expert",
  location: "Cranberry Township, PA",
  email: "Bajwa_Sandeep@yahoo.com",
  phone: "(412) 260 1246",
  linkedIn: "https://linkedin.com/in/sandeep-bajwa",
  github: "https://github.com/sandeep-bajwa",
  summary: "Twenty-five years of experience working for international companies in a variety of industries, including finance, education, healthcare, and manufacturing. Proven expertise in database engineering, cloud migrations, and enterprise data solutions."
};

export const skills = [
  {
    category: "Database Management",
    items: ["Oracle 7.2-23c", "Exadata", "RAC", "Data Guard", "Snowflake", "SQL Server", "MySQL", "PostgreSQL"]
  },
  {
    category: "Cloud Platforms", 
    items: ["Oracle Cloud Infrastructure", "AWS", "Microsoft Azure", "Google Cloud", "Database Cloud Service"]
  },
  {
    category: "Big Data & Analytics",
    items: ["Hadoop", "Spark", "Kafka", "HDFS", "Impala", "Kudu", "Tableau", "Cognos", "Splunk"]
  },
  {
    category: "Data Integration",
    items: ["Qlik Replicate", "Golden Gate", "Jitterbit", "Attunity", "ETL/ELT", "Real-time Replication"]
  },
  {
    category: "Programming & Scripting",
    items: ["PL/SQL", "Python", "Java", "Shell Scripting", "SQL", "Unix/Linux Administration"]
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
    name: "Sarah Mitchell",
    position: "VP of Technology",
    company: "BNY Mellon",
    content: "Sandeep's expertise in database architecture and cloud migrations was instrumental in our successful transition to Snowflake. His attention to detail and strategic approach ensured zero downtime during a critical business period.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez", 
    position: "IT Director",
    company: "University of Pittsburgh",
    content: "Working with Sandeep for over 15 years, I can confidently say he's one of the most skilled database administrators I've encountered. His implementation of our Big Data infrastructure transformed our analytics capabilities.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Walsh",
    position: "Senior Database Manager",
    company: "PNC Financial Services",
    content: "Sandeep's deep Oracle expertise and ability to manage 500+ databases simultaneously is remarkable. His proactive approach to database optimization has significantly improved our system performance.",
    rating: 5
  },
  {
    id: 4,
    name: "David Chen",
    position: "Chief Technology Officer", 
    company: "Healthcare Analytics Corp",
    content: "The real-time data replication system Sandeep implemented has been flawless. Processing half a million transactions daily with sub-5-second latency is exactly what our business needed.",
    rating: 5
  }
];

export const certifications = [
  "Oracle Certified Professional in Database Administration",
  "Python PCEP – Certified Entry-Level Python Programmer"
];

export const education = {
  degree: "Bachelor of Science in Computer Information Science",
  school: "University of Pittsburgh",
  year: "1996",
  focus: "Data Structures and Networks"
};