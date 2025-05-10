import { useState } from 'react'
import './App.css'

function App() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"; // Replace with actual contract address

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">$COIN</div>
        <div className="nav-links">
          <a href="#tokenomics">Tokenomics</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#social">Social</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>$COIN</h1>
          <p>The next generation of meme coins</p>
          <div className="contract-box">
            <span className="contract-label">Contract Address:</span>
            <div className="contract-address">
              <code>{contractAddress}</code>
              <button 
                className="copy-button" 
                onClick={copyToClipboard}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="https://app.uniswap.org/swap" target="_blank" rel="noopener noreferrer" className="cta-button buy-button">
              Buy on Uniswap
            </a>
            <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="cta-button chart-button">
              View Chart
            </a>
          </div>
        </div>
      </section>

      <section id="tokenomics" className="features">
        <h2>Tokenomics</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Total Supply</h3>
            <p>1,000,000,000,000</p>
          </div>
          <div className="feature-card">
            <h3>Tax</h3>
            <p>2% Buy / 2% Sell</p>
          </div>
          <div className="feature-card">
            <h3>Liquidity</h3>
            <p>Locked Forever</p>
          </div>
        </div>
      </section>

      <section id="roadmap" className="about">
        <h2>Roadmap</h2>
        <div className="roadmap-content">
          <p>Phase 1: Launch & Marketing</p>
          <p>Phase 2: Community Building</p>
          <p>Phase 3: Exchange Listings</p>
          <p>Phase 4: Ecosystem Expansion</p>
        </div>
      </section>

      <section id="social" className="contact">
        <h2>Join Our Community</h2>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-button twitter">
            Twitter
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-button telegram">
            Telegram
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-button discord">
            Discord
          </a>
        </div>
      </section>

      {/* <footer className="footer">
        <p>&copy; 2024 $COIN. All rights reserved.</p>
      </footer> */}
    </div>
  )
}

export default App
