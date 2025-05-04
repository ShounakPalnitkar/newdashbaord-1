import React, { useState, useEffect, useRef } from 'react';
import './Dashboard.css';

const CKDashboard = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    race: '',
    hypertension: '',
    diabetes: '',
    duration: '0',
    family_history: '',
    family_diseases: [],
    bmi: '',
    smoking: '',
    cardiovascular: '',
    symptoms: []
  });

  const [results, setResults] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const chartRefs = {
    riskLevel: useRef(null),
    factors: useRef(null)
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const newValue = checked
        ? [...formData[name], value]
        : formData[name].filter(item => item !== value);
      setFormData({ ...formData, [name]: newValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const calculateRisk = (e) => {
    e.preventDefault();
    const riskScore = calculateRiskScore(formData);
    setResults({
      riskScore,
      riskLevel: determineRiskLevel(riskScore),
      riskPercentage: determineRiskPercentage(riskScore),
      factors: identifyRiskFactors(formData, riskScore)
    });
  };

  useEffect(() => {
    if (results && chartRefs.riskLevel.current) {
      renderRiskLevelChart();
      renderFactorsChart();
    }
  }, [results]);

  return (
    <div className="dashboard">
      <header>
        <h1>Chronic Kidney Disease Prediction Tool</h1>
        <p>Assess your risk factors for developing chronic kidney disease</p>
      </header>

      {!results ? (
        <AssessmentForm
          formData={formData}
          onChange={handleInputChange}
          onSubmit={calculateRisk}
        />
      ) : (
        <>
          <ResultsSection results={results} />
          <Visualizations results={results} chartRefs={chartRefs} />
          <button onClick={() => setResults(null)}>New Assessment</button>
        </>
      )}

      <Footer />
    </div>
  );
};

const AssessmentForm = ({ formData, onChange, onSubmit }) => (
  <section className="form-section">
    <h2>Patient Information</h2>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Age (years):</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={onChange}
          min="18"
          max="120"
          required
        />
      </div>
      {/* Add more input fields here as needed */}
      <button type="submit">Calculate My CKD Risk</button>
    </form>
  </section>
);

const ResultsSection = ({ results }) => (
  <section className="results-section">
    <h2>Your CKD Risk Assessment Results</h2>
    <div className="risk-message">
      <p>Your calculated CKD risk score: <strong>{results.riskScore}/20</strong></p>
      <p>Risk level: <span className={`risk-${results.riskLevel}`}>
        {results.riskLevel.toUpperCase()}
      </span></p>
      <p>Estimated 5-year risk: {results.riskPercentage}</p>
    </div>
    <RiskFactors factors={results.factors} />
    <Recommendations riskLevel={results.riskLevel} />
  </section>
);

const Visualizations = ({ results, chartRefs }) => (
  <section className="visualizations">
    <h2>Your Risk Visualizations</h2>
    <div className="chart-grid">
      <div className="chart-container">
        <canvas ref={chartRefs.riskLevel}></canvas>
      </div>
      <div className="chart-container">
        <canvas ref={chartRefs.factors}></canvas>
      </div>
    </div>
  </section>
);

const RiskFactors = ({ factors }) => (
  <div>
    <h3>Key Risk Factors</h3>
    <ul>
      {factors.map((factor, index) => (
        <li key={index}>{factor}</li>
      ))}
    </ul>
  </div>
);

const Recommendations = ({ riskLevel }) => (
  <div>
    <h3>Recommendations</h3>
    <p>
      {riskLevel === 'high' && 'Consult a nephrologist immediately.'}
      {riskLevel === 'moderate' && 'Consider lifestyle and diet changes, monitor kidney function.'}
      {riskLevel === 'low' && 'Maintain a healthy lifestyle to keep your kidneys strong.'}
    </p>
  </div>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 CKD Risk Tool | Built for educational use</p>
  </footer>
);

// Dummy logic for calculation – customize as needed
const calculateRiskScore = (formData) => {
  let score = 0;
  if (parseInt(formData.age) > 50) score += 3;
  if (formData.hypertension === 'yes') score += 4;
  if (formData.diabetes === 'yes') score += 5;
  if (formData.family_history === 'yes') score += 2;
  if (formData.smoking === 'yes') score += 2;
  return Math.min(score, 20);
};

const determineRiskLevel = (score) => {
  if (score >= 15) return 'high';
  if (score >= 8) return 'moderate';
  return 'low';
};

const determineRiskPercentage = (score) => {
  if (score >= 15) return '70-90%';
  if (score >= 8) return '30-60%';
  return 'Less than 10%';
};

const identifyRiskFactors = (formData, score) => {
  const factors = [];
  if (parseInt(formData.age) > 50) factors.push("Age > 50");
  if (formData.hypertension === 'yes') factors.push("Hypertension");
  if (formData.diabetes === 'yes') factors.push("Diabetes");
  if (formData.family_history === 'yes') factors.push("Family History");
  if (formData.smoking === 'yes') factors.push("Smoking");
  return factors;
};

// Dummy chart rendering
const renderRiskLevelChart = () => {
  const ctx = document.querySelector('canvas').getContext('2d');
  ctx.fillStyle = '#f00';
  ctx.fillRect(10, 10, 100, 100);
};

const renderFactorsChart = () => {
  const ctx = document.querySelectorAll('canvas')[1].getContext('2d');
  ctx.fillStyle = '#0a0';
  ctx.fillRect(10, 10, 100, 100);
};

export default CKDashboard;
