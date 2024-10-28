import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Link, Image, PDFViewer } from '@react-pdf/renderer';
import './Resume.css';
import aboutMeImage from '../../assets/About_me.jpeg';
import resumeData from '../../assets/My_resume_details';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#d2941a',
    borderBottomStyle: 'solid',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333',
  },
  heading: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#555',
  },
  normalText: {
    fontSize: 12,
    marginBottom: 5,
    color: '#666',
  },
  list: {
    marginLeft: 10,
  },
  link: {
    color: '#1a0dab',
    textDecoration: 'none',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    marginBottom: 20,
  },
  profileSection: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#d2941a',
    borderBottomStyle: 'solid',
  },
  educationSection: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#d2941a',
    borderBottomStyle: 'solid',
  },
  skillsSection: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#d2941a',
    borderBottomStyle: 'solid',
  },
  projectsSection: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#d2941a',
    borderBottomStyle: 'solid',
  },
  hobbiesSection: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#d2941a',
    borderBottomStyle: 'solid',
  },
  languagesSection: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#d2941a',
    borderBottomStyle: 'solid',
  },
  contactSection: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#d2941a',
    borderBottomStyle: 'solid',
  },
});

const ResumeDocument = ({ resumeData }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Image style={styles.image} src={aboutMeImage} />
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
        <Link style={[styles.normalText, styles.link]} src={`https://${resumeData.contact.linkedin}`}>
          LinkedIn: {resumeData.contact.linkedin}
        </Link>
        <Link style={[styles.normalText, styles.link]} src={`https://${resumeData.contact.github}`}>
          GitHub: {resumeData.contact.github}
        </Link>
      </View>
    </Page>
  </Document>
);

const Resume = () => {
  return (
    <div className="resume-container">
      <PDFViewer style={{ width: '50%', height: '900px' }}>
        <ResumeDocument resumeData={resumeData} />
      </PDFViewer>

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