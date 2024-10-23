import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import './Resume.css';

// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 12,
    marginBottom: 5,
  },
  list: {
    marginLeft: 10,
  },
});

const ResumeDocument = ({ resumeData }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{resumeData.name}</Text>
        <Text style={styles.normalText}>Email: {resumeData.email}</Text>
        <Text style={styles.normalText}>Phone: {resumeData.phone}</Text>
        <Text style={styles.normalText}>Address: {resumeData.address}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Profile</Text>
        <Text style={styles.normalText}>{resumeData.profile}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        {resumeData.education.map((edu, index) => (
          <View key={index}>
            <Text style={styles.normalText}>{edu.degree}</Text>
            <Text style={styles.normalText}>{edu.institution}</Text>
            <Text style={styles.normalText}>{edu.duration}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        {resumeData.skills.map((skill, index) => (
          <Text key={index} style={[styles.normalText, styles.list]}>
            - {skill}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Projects</Text>
        {resumeData.projects.map((project, index) => (
          <View key={index}>
            <Text style={styles.normalText}>{index + 1}. {project.title}</Text>
            <Text style={styles.normalText}>{project.description}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Hobbies</Text>
        {resumeData.hobbies.map((hobby, index) => (
          <Text key={index} style={[styles.normalText, styles.list]}>
            - {hobby}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Languages</Text>
        {resumeData.languages.map((language, index) => (
          <Text key={index} style={[styles.normalText, styles.list]}>
            - {language}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Contact</Text>
        <Link style={styles.normalText} src={`https://${resumeData.contact.linkedin}`}>
          LinkedIn: {resumeData.contact.linkedin}
        </Link>
        <Link style={styles.normalText} src={`https://${resumeData.contact.github}`}>
          GitHub: {resumeData.contact.github}
        </Link>
      </View>
    </Page>
  </Document>
);

const Resume = () => {
  // Your resume data
  const resumeData = {
    name: "Anuj Bhusal",
    email: "anujbhusal96@gmail.com",
    phone: "9814421053",
    address: "Maitidevi, Kathmandu",
    profile: "A passionate learner and a computer science student currently pursuing a BSc (Hons) in Computer Science with Artificial Intelligence at Sunway College Kathmandu, affiliated with Birmingham City University, Birmingham. I have a deep interest in AI and data science and enjoy working on innovative solutions through coding and development.",
    education: [
      {
        degree: "BSc (Hons) in Computer Science with Artificial Intelligence",
        institution: "Sunway College Kathmandu",
        duration: "2023 - Present"
      }
    ],
    skills: [
      "Python, JavaScript, React.js",
      "HTML, CSS, Web Designing",
      "Machine Learning, Data Science",
      "VS Code, Google Colab"
    ],
    projects: [
      {
        title: "AI-Based Stock Prediction Tool",
        description: "A web application that predicts stock prices using machine learning algorithms and displays real-time data for Nepali stock market companies."
      },
      {
        title: "Hospital Management System",
        description: "A desktop application built using Python to manage hospital records, patient details, and appointments, integrating a user-friendly interface."
      },
      {
        title: "React-App Portfolio",
        description: "A personal portfolio website built using React.js to showcase my projects, skills, and experiences."
      }
    ],
    hobbies: ["Singing", "Playing sports", "Coding and learning about AI"],
    languages: ["English", "Nepali"],
    contact: {
      linkedin: "linkedin.com/in/anuj-bhusal-22447531b/",
      github: "github.com/Anuj-Bhusal"
    }
  };

  return (
    <div className="resume-container">
      <div className="resume-title">
        <h1>My Resume</h1>
        <h2>{resumeData.name}</h2>
      </div>
      <div className="resume-details">
        <p>Email: {resumeData.email}</p>
        <p>Phone: {resumeData.phone}</p>
        <p>Address: {resumeData.address}</p><br></br>
        
        <h2>Profile</h2>
        <p className="profile-section">{resumeData.profile}</p><br></br>

        <h2>Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.duration}</p>
          </div>
        ))}<br></br>

        <h2>Skills</h2>
        <ul>
          {resumeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul><br></br>

        <h2>Projects</h2>
        {resumeData.projects.map((project, index) => (
          <div className='project' key={index}>
            <h3>{index + 1}. {project.title}</h3>
            <p>{project.description}</p><br></br>
          </div>
        ))}<br></br>

        <h2>Hobbies</h2>
        <ul>
          {resumeData.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul><br></br>

        <h2>Languages</h2>
        <ul>
          {resumeData.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul><br></br>

        <h2>Contact</h2>
        <p>LinkedIn: <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.linkedin}</a></p><br></br>
        <p>GitHub: <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.github}</a></p>
      </div>

      <PDFDownloadLink document={<ResumeDocument resumeData={resumeData} />} fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : (
            <button className="download-button">
              Download Resume
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Resume;
