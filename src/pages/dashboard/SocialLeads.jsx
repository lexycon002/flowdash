// SocialLeads.js
import React from 'react';
import { FaFacebookF, FaLinkedinIn,FaInstagram,FaSnapchatGhost,FaGoogle,FaYahoo,FaSpotify } from 'react-icons/fa';

const leadsData = [
  { name: 'Facebook', percent: 55, color: '#1877f2', icon: <FaFacebookF /> },
  { name: 'LinkedIn', percent: 67, color: '#0077b5', icon: <FaLinkedinIn /> },
  { name: 'Instagram', percent: 78, color: '#e1306c', icon: <FaInstagram /> },
  { name: 'Snapchat', percent: 46, color: '#ff9900', icon: <FaSnapchatGhost /> },
  { name: 'Google', percent: 38, color: '#00c3ff', icon: <FaGoogle /> },
  { name: 'Altaba', percent: 15, color: '#8e2de2', icon: <FaYahoo /> },
  { name: 'Spotify', percent: 12, color: '#1db954', icon: <FaSpotify /> },
];

const SocialLeads = () => {
  return (
    <div className="social-leads">
      <h3>Social Leads</h3>
      {leadsData.map((lead, idx) => (
        <div className="lead-row" key={idx}>
          <div className="lead-left">
            <div className="icon-circle" style={{ backgroundColor: lead.color }}>
              {lead.icon}
            </div>
            <span>{lead.name}</span>
          </div>
          <div className="lead-right">
            <span>{lead.percent}%</span>
            <ProgressRing percentage={lead.percent} color={lead.color} />
          </div>
        </div>
      ))}
    </div>
  );
};

const ProgressRing = ({ percentage, color }) => {
  const radius = 10;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#2e2e4e"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

export default SocialLeads;
