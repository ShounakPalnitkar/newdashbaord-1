import React, { useState } from 'react';
import './App.css';

const CKDashboard = () => {
  const [currentSection, setCurrentSection] = useState('welcome-screen');
  const [formData, setFormData] = useState({});
  const [results, setResults] = useState(null);

  const dashboardData = {
    metadata: {
      title: "Chronic Kidney Disease Prediction Tool",
      description: "A tool to assess risk factors for chronic kidney disease (CKD) and provide personalized recommendations.",
      version: "1.0",
      created: "2023-11-15",
      security: {
        encryption: "AES-256",
        data_collection: "Minimal personal identifiers",
        compliance: "HIPAA-inspired standards"
      }
    },
    color_scheme: {
      primary: "#1a6fc9",
      primary_dark: "#145da0",
      secondary: "#27ae60",
      warning: "#f39c12",
      danger: "#e74c3c",
      security: "#8e44ad"
    },
    // ... rest of your JSON data
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const calculateRisk = () => {
    // Implement your risk calculation logic here
    const riskScore = 0; // Calculate based on formData
    setResults({
      riskScore,
      riskLevel: "low", // Calculate based on score
      riskPercentage: "5%", // Calculate based on score
      riskFactors: [] // Calculate based on form data
    });
    setCurrentSection('result');
  };

  const renderWelcomeScreen = () => (
    <div className="welcome-screen">
      <h1>{dashboardData.metadata.title}</h1>
      <p>{dashboardData.metadata.description}</p>
      
      <div className="info-box">
        <h3>Before You Begin</h3>
        <ul>
          <li>This assessment will ask about your medical history, family history, and lifestyle factors that may affect kidney health.</li>
          <li>Have your health information ready, including any known conditions like diabetes or high blood pressure.</li>
        </ul>
      </div>
      
      <div className="privacy-section">
        <h3>Data Security & Privacy</h3>
        <ul>
          <li>End-to-end encryption - All data is encrypted in transit and at rest</li>
          <li>No personal identifiers - We don't store your name, address, or other direct identifiers</li>
          <li>User-controlled sharing - You decide what information to share with healthcare providers</li>
        </ul>
        <p>All data transmissions are secured with AES-256 encryption</p>
      </div>
      
      <button 
        className="primary-btn"
        onClick={() => setCurrentSection('assessment-form')}
      >
        Begin Assessment
      </button>
    </div>
  );

  const renderAssessmentForm = () => (
    <div className="assessment-form">
      <h2>Patient Information</h2>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        calculateRisk();
      }}>
        <div className="form-section">
          <h3>Demographics</h3>
          <div className="form-group">
            <label htmlFor="age">Age (years)</label>
            <input 
              type="number" 
              id="age" 
              min="18" 
              max="120" 
              required 
              value={formData.age || ''}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="sex">Sex</label>
            <select 
              id="sex" 
              required
              value={formData.sex || ''}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          
          {/* Add more form fields similarly */}
        </div>
        
        <div className="form-section">
          <h3>Medical History</h3>
          {/* Add medical history fields */}
        </div>
        
        <div className="form-section">
          <h3>Symptoms</h3>
          {/* Add symptoms checkboxes */}
        </div>
        
        <button type="submit" className="primary-btn">
          Calculate My CKD Risk
        </button>
      </form>
    </div>
  );

  const renderResults = () => (
    <div className="results-section">
      <h2>Your CKD Risk Assessment Results</h2>
      
      {results && (
        <>
          <div className="risk-summary">
            <h3>Risk Summary</h3>
            <p>Risk Score: {results.riskScore}</p>
            <p>Risk Level: {results.riskLevel}</p>
            <p>5-Year Risk Probability: {results.riskPercentage}</p>
          </div>
          
          <div className="info-box">
            <h3>Understanding Your Results</h3>
            <p>This assessment is based on established risk factors for chronic kidney disease including age, diabetes, hypertension, family history, and other clinical factors.</p>
            <p>Note: This tool cannot diagnose CKD. Only blood tests (eGFR) and urine tests (ACR) can confirm kidney disease.</p>
          </div>
        </>
      )}
      
      <button 
        className="secondary-btn"
        onClick={() => {
          setCurrentSection('welcome-screen');
          setFormData({});
          setResults(null);
        }}
      >
        Start New Assessment
      </button>
    </div>
  );

  return (
    <div className="ckd-dashboard">
      <header>
        <h1>{dashboardData.metadata.title}</h1>
        <p className="version">Version {dashboardData.metadata.version}</p>
      </header>
      
      <main>
        {currentSection === 'welcome-screen' && renderWelcomeScreen()}
        {currentSection === 'assessment-form' && renderAssessmentForm()}
        {currentSection === 'result' && renderResults()}
      </main>
      
      <footer>
        <p>Disclaimer: This tool is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default CKDashboard;