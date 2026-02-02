import React from 'react';
// --- Components ---
import CustomSemiCircle from '../../pages/dashboard/CustomSemiCircle';
import CustomZigZag from '../../pages/dashboard/CustomZigZag';
import MonthlyRevenueChart from '../../pages/dashboard/MonthlyRevenueChart';
import DeviceType from '../../pages/dashboard/DeviceType';
import TotalClicksChart from '../../pages/dashboard/TotalClicksChart';
import TotalViewsChart from '../../pages/dashboard/TotalViewsChart';
import TotalAccountsChart from '../../pages/dashboard/TotalAccountsChart';
import VisitorsGrowthChart from '../../pages/dashboard/VisitorsGrowthChart';
import SocialLeads from '../../pages/dashboard/SocialLeads';
import NewUser from '../../pages/dashboard/NewUser';
import RecentOrder from '../../pages/dashboard/RecentOrder';

// --- Icons & Assets ---
import { MdCampaign, MdEmail, MdMarkEmailRead, MdOutlineMarkEmailUnread, MdSubscriptions, MdReportGmailerrorred, MdVisibility } from "react-icons/md";
import { BsThreeDotsVertical, BsArrowDownShort } from "react-icons/bs";
import { IoDesktop } from "react-icons/io5";
import { IoIosTabletPortrait, IoMdTrendingUp } from "react-icons/io";
import { CiMobile4 } from "react-icons/ci";
import img from "../../assets/myImage.png";
import vectorImg from "../../assets/vector.png";

function Analysis() {
  
  const Stat = [
    {icon: <MdCampaign size={20} color="#ff00cc" />,label: "Campaigns",count: 62,change: 28,},
    {icon: <MdEmail size={20} color="#00c9ff" />,label: "Emailed",count: 748,change: -15,},
    {icon: <MdMarkEmailRead size={20} color="#00ffaa" />,label: "Opened",count: 83,change: 30.5,},
    {icon: <MdOutlineMarkEmailUnread size={20} color="#ffaa00" />,label: "Clicked",count: 321,change: -34.6,},
    {icon: <MdSubscriptions size={20} color="#ffcc00" />,label: "Subscribed",count: 658,change: 53,},
    {icon: <MdReportGmailerrorred size={20} color="#ff4444" />,label: "Spam Message",count: 129,change: -47,},
    {icon: <MdVisibility size={20} color="#9966ff" />,label: "Views Mails",count: 10205,change: 68,},
  ];

  const deviceData = [
    { label: "Desktop", value: 35, icon: <IoDesktop />, color: "#00c9ff" },
    { label: "Tablet", value: 48, icon: <IoIosTabletPortrait />, color: "#ff7eb9" },
    { label: "Mobile", value: 27, icon: <CiMobile4 />, color: "#fcd000" }
  ];

  return (
    <div className="p-6 space-y-6 pb-4 transition-colors duration-300">
      
      {/* --- ROW 1: WELCOME + ACTIVE + TOTAL USERS --- */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Welcome Banner */}
        <div className="xl:col-span-8 flex flex-col md:flex-row items-center justify-between bg-card-bg rounded-xl p-8 shadow-lg border border-border-color relative overflow-hidden h-[220px]">
          <div className="flex flex-col gap-6 z-10 w-full">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-indigo-500 flex items-center justify-center bg-indigo-500/10">
                <img src={img} alt="user" className="w-14 h-14 rounded-full object-cover" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase font-semibold">Welcome back</p>
                <p className="text-2xl font-bold text-text-main">Hammad Awowole!</p>
              </div>
            </div>
            <div className="flex gap-14 pl-4">
              <div>
                <h4 className="text-2xl font-bold text-text-main">$102.4K</h4>
                <p className="text-xs text-text-muted mt-1">Today's Sales</p>
                <div className="w-20 h-1 bg-gray-200 dark:bg-gray-700 mt-2 rounded"><div className="w-2/3 h-full bg-green-500 rounded"></div></div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-text-main">98.4%</h4>
                <p className="text-xs text-text-muted mt-1">Growth Rate</p>
                <div className="w-20 h-1 bg-gray-200 dark:bg-gray-700 mt-2 rounded"><div className="w-3/4 h-full bg-red-500 rounded"></div></div>
              </div>
            </div>
          </div>
          <img src={vectorImg} alt="bg" className="hidden md:block absolute right-0 bottom-0 w-64 opacity-80" />
        </div>

        {/* Active Users */}
        <div className="xl:col-span-2 bg-card-bg rounded-xl p-4 border border-border-color shadow-lg h-[220px] flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-4 right-4 text-text-muted"><BsThreeDotsVertical/></div>
           <div>
             <h4 className="text-xl font-bold text-text-main">31.5K</h4>
             <p className="text-xs text-text-muted">Active Users</p>
           </div>
           <div className="flex flex-col items-center justify-center">
              <div className="transform scale-90"><CustomSemiCircle percent={78} /></div>
              <p className="text-[10px] text-text-muted mt-2 text-center">12K users increased from last month</p>
           </div>
        </div>
        
        {/* Total Users */}
        <div className="xl:col-span-2 bg-card-bg rounded-xl p-4 border border-border-color shadow-lg h-[220px] flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-4 right-4 text-text-muted"><BsThreeDotsVertical/></div>
           <div>
             <h4 className="text-xl font-bold text-text-main">87.4K</h4>
             <p className="text-xs text-text-muted">Total Users</p>
           </div>
           <div className="w-full h-16"><CustomZigZag/></div>
           <p className="text-[10px] text-green-500 mt-1">17.5% from last month</p>
        </div>
      </div>

      {/* --- ROW 2: REVENUE | DEVICE | (CLICKS, VIEWS, ACCOUNTS) --- */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* COL 1: Monthly Revenue */}
        <div className="bg-card-bg rounded-xl p-6 border border-border-color shadow-lg h-[480px] flex flex-col">
           <div className="flex justify-between items-center mb-4">
             <h3 className="text-text-main font-bold">Monthly Revenue</h3>
           </div>
           <div className="flex-1 flex items-center justify-center">
             <MonthlyRevenueChart/> 
           </div>
           <div className="mt-4">
             <p className="text-text-muted text-xs mb-1">Average monthly sale for every author</p>
             <h4 className="text-3xl font-bold text-blue-500">72.9% <span className="text-sm text-green-500 ml-2">43.5% ↑</span></h4>
           </div>
        </div>

        {/* COL 2: Device Type */}
        <div className="bg-card-bg rounded-xl p-6 border border-border-color shadow-lg h-[480px] flex flex-col">
           <div className="flex justify-between items-center mb-2">
             <h3 className="text-text-main font-bold">Device Type</h3>
             <BsThreeDotsVertical className="text-text-muted"/>
           </div>
           <div className="flex-1 flex items-center justify-center relative">
             <DeviceType data={deviceData} />
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <h4 className="text-3xl font-bold text-text-main">78%</h4>
                <p className="text-xs text-text-muted">Total Views</p>
             </div>
           </div>
           <div className="space-y-3 mt-2">
             {deviceData.map((d, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-border-color pb-2 last:border-0">
                   <div className="flex items-center gap-2">
                      <span className="text-lg" style={{color: d.color}}>{d.icon}</span>
                      <span className="text-text-muted">{d.label}</span>
                   </div>
                   <span className="text-text-muted font-semibold">{d.value}%</span>
                </div>
             ))}
           </div>
        </div>

        {/* COL 3: Stacked Charts */}
        <div className="flex flex-col gap-6 h-[480px]">
            
            {/* Top Half: Clicks & Views */}
            <div className="grid grid-cols-2 gap-6 h-2/3">
                {/* Total Clicks */}
                <div className="bg-card-bg rounded-xl p-5 border border-border-color shadow-lg relative flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-4 right-4 text-text-muted"><BsThreeDotsVertical/></div>
                    <div>
                      <h4 className="text-xl font-bold text-text-main">82.7K</h4>
                      <p className="text-xs text-text-muted mb-2">Total Clicks</p>
                    </div>
                    <div className="flex-1 flex items-end justify-center w-full">
                       <div className="w-[120%] -ml-2"><TotalClicksChart/></div>
                    </div>
                    <p className="text-[10px] text-green-500 mt-2">12.5% from last month</p>
                </div>
                {/* Total Views */}
                <div className="bg-card-bg rounded-xl p-5 border border-border-color shadow-lg relative flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-4 right-4 text-text-muted"><BsThreeDotsVertical/></div>
                    <div>
                      <h4 className="text-xl font-bold text-text-main">68.4K</h4>
                      <p className="text-xs text-text-muted mb-2">Total Views</p>
                    </div>
                    <div className="flex-1 flex items-end justify-center w-full">
                       <div className="w-[120%] -ml-2"><TotalViewsChart/></div>
                    </div>
                    <p className="text-[10px] text-text-muted mt-2">35K users increased</p>
                </div>
            </div>

            {/* Bottom Half: Total Accounts */}
            <div className="h-1/2 bg-card-bg rounded-xl p-6 border border-border-color shadow-lg relative">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="text-2xl font-bold text-text-main">85,247 <span className="text-sm text-green-500 bg-green-500/10 px-2 py-0.5 rounded ml-2">↓ 23.7%</span></h4>
                        <p className="text-xs text-text-muted">Total Accounts</p>
                    </div>
                </div>
                <div className="mt-4 h-24 w-full">
                    <TotalAccountsChart />
                </div>
            </div>
        </div>
      </div>

      {/* --- ROW 3: CAMPAIGNS + VISITORS + SOCIAL --- */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
         
         {/* Campaign Stats */}
         <div className="bg-card-bg rounded-xl p-6 border border-border-color shadow-lg flex flex-col">
            <div className="flex justify-between mb-6"><h5 className="text-text-main font-bold">Campaign Stats</h5><BsThreeDotsVertical className="text-text-muted"/></div>
            <div className="space-y-5 flex-1"> 
               {Stat.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-border-color pb-3 last:border-0 last:pb-0">
                     <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-lg">{item.icon}</span>
                        <span className="text-text-muted text-sm font-medium">{item.label}</span>
                     </div>
                     <div className="text-right">
                        <p className="text-text-main font-bold text-sm">{item.count}</p>
                        <p className={`text-[10px] font-bold ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>{item.change}%</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Visitors Growth */}
         <div className="bg-card-bg rounded-xl p-6 border border-border-color shadow-lg flex flex-col justify-between">
            <div>
               <div className="flex justify-between mb-4">
                   <h3 className="text-3xl font-bold text-text-main">36.7% <span className="text-sm text-green-500 ml-2">↗ 34.5%</span></h3>
               </div>
               <p className="text-xs text-text-muted mb-6">Visitors Growth</p>
               <VisitorsGrowthChart />
            </div>
            <div className="space-y-5 mt-2">
               <Progress label="Clicks" value={2589} max={10000} color="#d946ef" />
               <Progress label="Likes" value={6748} max={10000} color="#f59e0b" />
               <Progress label="Upvotes" value={9842} max={10000} color="#0ea5e9" />
            </div>
         </div>

         {/* Social Leads */}
         <div className="bg-card-bg rounded-xl p-6 border border-border-color shadow-lg">
            <SocialLeads />
         </div>
      </div>

      {/* --- ROW 4: NEW USERS + RECENT ORDERS --- */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
         <div className="xl:col-span-4 bg-card-bg rounded-xl p-6 border border-border-color shadow-lg h-[500px] overflow-hidden">
            <NewUser />
         </div>
         <div className="xl:col-span-8 bg-card-bg rounded-xl p-6 border border-border-color shadow-lg h-[500px] overflow-hidden">
            <RecentOrder />
         </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="text-right py-4 border-t border-border-color mt-4">
          <p className="text-text-muted text-sm">
             Copyright © {new Date().getFullYear()}-{new Date().getFullYear() + 1}. All right reserved.
          </p>
      </div>

    </div>
  );
}

// Progress Bar Helper (Updated for Theme)
const Progress = ({ label, value, max, color }) => {
  const percent = (value / max) * 100;
  return (
    <div>
      <div className="flex justify-between text-xs text-text-muted mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1">
        <div className="h-1 rounded-full" style={{ width: `${percent}%`, backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default Analysis;