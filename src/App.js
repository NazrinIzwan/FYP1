import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ToolCard from './ToolCard';
import URLScanner from './URLScanner';
import PasswordStrength from './PasswordStrength';
import EncryptionDecryption from './EncryptionDecryption';
import PasswordGenerator from './PasswordGenerator';
import CybersecurityEducation from './CybersecurityEducation';
import HomePage from './HomePage';
import Footer from './Footer';
import './App.css';
import layoutStyles from './Layout.module.css'; // Assumed correct CSS module name
import toolCardStyles from './ToolCard.module.css'; // Assumed correct CSS module name

function App() {
  const tools = [
    { icon: 'antivirus.png', name: 'Phishing Detector', path: '/url-scanner', component: URLScanner, description: 'Detect phishing threats' },
    { icon: 'antivirus.png', name: 'Password Strength Analysis Tool', path: '/password-strength', component: PasswordStrength, description: 'Analyze the strength of your password' },
    { icon: 'antivirus.png', name: 'Encryption and Decryption Tool', path: '/encryption-decryption', component: EncryptionDecryption, description: 'Encrypt and decrypt your data' },
    { icon: 'antivirus.png', name: 'Password Generator', path: '/password-generator', component: PasswordGenerator, description: 'Generate strong passwords' },
    { icon: 'antivirus.png', name: 'Cybersecurity Education Section', path: '/cybersecurity-education', component: CybersecurityEducation, description: 'Learn about cybersecurity' }
  ];

  return (
    <Router>
      <div className="App">
        {/* NavBar */}
        <nav className="NavBar">
          {/* Logo or Title for the NavBar */}
          <Link to="/" className="logo">CyberSecurity Hub</Link>
          {/* NavBar Links */}
          <div className="nav-links">
            {tools.map((tool, index) => (
              <Link key={index} to={tool.path}>{tool.name}</Link>
            ))}
          </div>
        </nav>
        
        {/* Page Content */}
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {tools.map((tool, index) => (
              <Route key={index} path={tool.path} element={React.createElement(tool.component)} />
            ))}
          </Routes>
        </AnimatePresence>
        
        {/* Tool Cards */}
        <div className={layoutStyles.toolsSection}>
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={require(`./images/${tool.icon}`)} // Assumed images are in src/images/
              title={tool.name}
              text={tool.description} // Actual descriptions here
              linkTo={tool.path}
              styles={toolCardStyles}
            />
          ))}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;