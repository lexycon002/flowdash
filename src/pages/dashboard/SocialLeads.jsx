import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaSnapchatGhost, FaGoogle, FaYahoo, FaSpotify } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";

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
    <div>
      <div className="flex justify-between items-center mb-6">
         <h3 className="text-white font-bold">Social Leads</h3>
         <BsThreeDotsVertical className="text-gray-500 cursor-pointer"/>
      </div>
      
      <div className="space-y-6">
        {leadsData.map((lead, idx) => (
          <div className="flex justify-between items-center" key={idx}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex text-white items-center justify-center text-lg shadow-lg" style={{ backgroundColor: lead.color }}>
                {lead.icon}
              </div>
              <div>
                 <p className="text-gray-300 font-medium">{lead.name}</p>
                 <p className="text-xs text-gray-500">Target: {lead.percent}%</p>
              </div>
            </div>
            
            {/* Progress Circle Visual */}
            <div className="relative w-10 h-10 flex items-center justify-center">
               <svg className="w-full h-full transform -rotate-90">
                 <circle cx="20" cy="20" r="16" stroke="#2e2e4e" strokeWidth="3" fill="none" />
                 <circle cx="20" cy="20" r="16" stroke={lead.color} strokeWidth="3" fill="none" 
                   strokeDasharray="100" 
                   strokeDashoffset={100 - lead.percent} 
                   strokeLinecap="round" 
                 />
               </svg>
               <span className="absolute text-[10px] text-gray-400">{lead.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLeads;